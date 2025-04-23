'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddPartnerPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    major: '',
    course: '',
    meetingPreferences: '',
    meetingLocations: '',
    groupSizePreference: '',
    photo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
        return;
      }

      alert('Partner added!');
      router.push('/partners'); // 👈 redirect to partner list
    } catch (err) {
      console.error('Submit error:', err);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Add New Partner</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          'name', 'gender', 'major', 'course',
          'meetingPreferences', 'meetingLocations',
          'groupSizePreference', 'photo',
        ].map((field) => (
          <div key={field}>
            <label className="block font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="text"
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-[var(--primary-color)] text-white py-2 px-4 rounded hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
