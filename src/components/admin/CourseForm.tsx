import React, { useState } from 'react';
import { supabase } from '../../lib/supabase-client';

interface CourseFormProps {
  onSuccess?: () => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setLoading(true);
      setError('');

      const courseData = {
        title: formData.get('title'),
        description: formData.get('description'),
        price_inr: parseInt(formData.get('price') as string),
        level: formData.get('level'),
        language: formData.get('language'),
        instructor_id: (await supabase.auth.getUser()).data.user?.id
      };

      const { error } = await supabase
        .from('courses')
        .insert([courseData]);

      if (error) throw error;

      form.reset();
      if (onSuccess) onSuccess();
    } catch (err) {
      setError('Failed to create course. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="mb-6 text-xl font-semibold">Create New Course</h2>
      
      {error && (
        <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-500 dark:bg-red-900/30 dark:text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="form-input"
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="price" className="mb-2 block text-sm font-medium">
              Price (INR)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="100"
              className="form-input"
              required
            />
          </div>

          <div>
            <label htmlFor="level" className="mb-2 block text-sm font-medium">
              Level
            </label>
            <select id="level" name="level" className="form-input" required>
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="language" className="mb-2 block text-sm font-medium">
            Primary Language
          </label>
          <select id="language" name="language" className="form-input" required>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Kannada">Kannada</option>
          </select>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="btn-outline"
            onClick={() => form.reset()}
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Course'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;