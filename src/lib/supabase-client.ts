import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Helper functions for courses
export async function getPublishedCourses() {
  const { data, error } = await supabase
    .from('courses')
    .select(`
      *,
      instructor:instructors(
        full_name,
        profile_image_url
      ),
      chapters(count),
      reviews(rating)
    `)
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getCourseDetails(slug: string) {
  const { data, error } = await supabase
    .from('courses')
    .select(`
      *,
      instructor:instructors(
        full_name,
        profile_image_url,
        bio,
        expertise
      ),
      chapters(
        id,
        title,
        description,
        sequence_number,
        duration_seconds,
        is_free
      ),
      reviews(
        rating,
        review_text,
        created_at,
        user:users(
          full_name,
          avatar_url
        )
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
}

// Helper functions for enrollments
export async function enrollInCourse(courseId: string, paymentDetails: any) {
  const { data, error } = await supabase
    .from('enrollments')
    .insert([
      {
        course_id: courseId,
        payment_status: 'pending',
        ...paymentDetails
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Helper functions for progress tracking
export async function updateProgress(enrollmentId: string, chapterId: string, progress: number) {
  const { data, error } = await supabase
    .from('progress')
    .upsert([
      {
        enrollment_id: enrollmentId,
        chapter_id: chapterId,
        completion_percentage: progress,
        completed: progress === 100
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Helper functions for reviews
export async function submitReview(enrollmentId: string, rating: number, reviewText: string) {
  const { data, error } = await supabase
    .from('reviews')
    .insert([
      {
        enrollment_id: enrollmentId,
        rating,
        review_text: reviewText
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}