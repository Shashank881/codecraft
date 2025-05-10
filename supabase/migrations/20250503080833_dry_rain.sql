/*
  # E-learning Platform Database Schema

  1. New Tables
    - `courses`
      - Core course information
      - Pricing in INR
      - GST handling
      - Regional language support
    
    - `chapters`
      - Course content organization
      - Video/content URLs
      - Duration tracking
    
    - `enrollments`
      - Student course enrollments
      - Payment tracking
      - Progress monitoring
    
    - `instructors`
      - Instructor profiles
      - Expertise areas
      - Revenue sharing
    
    - `reviews`
      - Course reviews
      - Rating system
      - Student feedback
    
  2. Security
    - Enable RLS on all tables
    - Specific policies for students, instructors, and admins
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Instructors Table
CREATE TABLE IF NOT EXISTS instructors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  full_name text NOT NULL,
  bio text,
  expertise text[],
  qualification text,
  profile_image_url text,
  social_links jsonb,
  bank_details jsonb,
  revenue_share_percentage integer DEFAULT 70,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE instructors ENABLE ROW LEVEL SECURITY;

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  instructor_id uuid REFERENCES instructors NOT NULL,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  long_description text,
  thumbnail_url text,
  preview_video_url text,
  level text NOT NULL,
  price_inr integer NOT NULL,
  discounted_price_inr integer,
  gst_percentage numeric(5,2) DEFAULT 18.00,
  language text DEFAULT 'English',
  regional_languages text[],
  tags text[],
  learning_outcomes text[],
  prerequisites text[],
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Chapters Table
CREATE TABLE IF NOT EXISTS chapters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses NOT NULL,
  title text NOT NULL,
  description text,
  sequence_number integer NOT NULL,
  content_type text NOT NULL,
  content_url text,
  duration_seconds integer,
  is_free boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;

-- Enrollments Table
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  course_id uuid REFERENCES courses NOT NULL,
  payment_id text,
  payment_status text NOT NULL,
  amount_paid_inr integer NOT NULL,
  gst_amount_inr integer NOT NULL,
  payment_method text,
  upi_id text,
  razorpay_order_id text,
  razorpay_payment_id text,
  invoice_number text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, course_id)
);

ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Progress Tracking Table
CREATE TABLE IF NOT EXISTS progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id uuid REFERENCES enrollments NOT NULL,
  chapter_id uuid REFERENCES chapters NOT NULL,
  completion_percentage integer DEFAULT 0,
  last_watched_position integer DEFAULT 0,
  completed boolean DEFAULT false,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(enrollment_id, chapter_id)
);

ALTER TABLE progress ENABLE ROW LEVEL SECURITY;

-- Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id uuid REFERENCES enrollments NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(enrollment_id)
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Instructors Policies
CREATE POLICY "Instructors can view their own profiles"
  ON instructors
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Instructors can update their own profiles"
  ON instructors
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Courses Policies
CREATE POLICY "Anyone can view published courses"
  ON courses
  FOR SELECT
  TO authenticated
  USING (is_published = true);

CREATE POLICY "Instructors can manage their own courses"
  ON courses
  FOR ALL
  TO authenticated
  USING (instructor_id IN (
    SELECT id FROM instructors WHERE user_id = auth.uid()
  ));

-- Chapters Policies
CREATE POLICY "Anyone can view chapters of enrolled courses"
  ON chapters
  FOR SELECT
  TO authenticated
  USING (
    course_id IN (
      SELECT course_id FROM enrollments WHERE user_id = auth.uid()
    ) OR is_free = true
  );

CREATE POLICY "Instructors can manage their course chapters"
  ON chapters
  FOR ALL
  TO authenticated
  USING (
    course_id IN (
      SELECT id FROM courses 
      WHERE instructor_id IN (
        SELECT id FROM instructors WHERE user_id = auth.uid()
      )
    )
  );

-- Enrollments Policies
CREATE POLICY "Students can view their own enrollments"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Students can create enrollments"
  ON enrollments
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Progress Policies
CREATE POLICY "Students can manage their own progress"
  ON progress
  FOR ALL
  TO authenticated
  USING (
    enrollment_id IN (
      SELECT id FROM enrollments WHERE user_id = auth.uid()
    )
  );

-- Reviews Policies
CREATE POLICY "Anyone can view course reviews"
  ON reviews
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Students can review enrolled courses"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (
    enrollment_id IN (
      SELECT id FROM enrollments WHERE user_id = auth.uid()
    )
  );

-- Functions

-- Function to calculate course statistics
CREATE OR REPLACE FUNCTION get_course_stats(course_uuid uuid)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result json;
BEGIN
  SELECT json_build_object(
    'total_students', COUNT(DISTINCT e.user_id),
    'avg_rating', ROUND(AVG(r.rating)::numeric, 1),
    'total_reviews', COUNT(r.id),
    'revenue_inr', SUM(e.amount_paid_inr)
  )
  INTO result
  FROM enrollments e
  LEFT JOIN reviews r ON r.enrollment_id = e.id
  WHERE e.course_id = course_uuid
  AND e.payment_status = 'completed';
  
  RETURN result;
END;
$$;