'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import PartnerList from '@/components/PartnerList';
import initialPartners from '@/data/partners';

const Partners = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const [partnerList, setPartnerList] = useState(initialPartners);
  const [showList, setShowList] = useState(false); 

  const [newPartner, setNewPartner] = useState({
    name: '',
    gender: '',
    major: '',
    course: '',
    meetingPreferences: '',
    meetingLocations: '',
    groupSizePreference: '',
    photo: '/profile.png'
  });

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setNewPartner(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();

    setPartnerList(prev => [
      ...prev,
      {
        ...newPartner,
        id: Date.now(),
      }
    ]);

    setNewPartner({
      name: '',
      gender: '',
      major: '',
      course: '',
      meetingPreferences: '',
      meetingLocations: '',
      groupSizePreference: '',
      photo: '/profile.png'
    });

    setShowList(true);
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Partners</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4">Add New Study Partner</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input name="name" value={newPartner.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Gender</label>
                <select name="gender" value={newPartner.gender} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Major</label>
                <input name="major" value={newPartner.major} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Course</label>
                <input name="course" value={newPartner.course} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Meeting Preferences</label>
                <input name="meetingPreferences" value={newPartner.meetingPreferences} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Meeting Locations</label>
                <input name="meetingLocations" value={newPartner.meetingLocations} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Group Size Preference</label>
                <input name="groupSizePreference" value={newPartner.groupSizePreference} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
              </div>
            </div>

            <p className="text-gray-600">Default profile photo will be used.</p>
            <button type="submit" className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-lg hover:opacity-90">
              Submit
            </button>
          </form>
        </div>

        {showList && <PartnerList partners={partnerList} />}
      </div>
    </div>
  );
};

export default Partners;