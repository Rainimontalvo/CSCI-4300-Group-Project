'use client';

import { useEffect, useState } from 'react';
import PartnerList from '@/src/components/PartnerList';

type Partner = {
  id: string;
  name: string;
  gender: string;
  major: string;
  course: string;
  meetingPreferences: string;
  meetingLocations: string;
  groupSizePreference: string;
  photo: string;
};

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const res = await fetch('/api/partners');
      const data = await res.json();

      // Ensure MongoDB _id is converted to id (string)
      const formatted = data.map((p: any) => ({
        id: p._id,
        name: p.name,
        gender: p.gender,
        major: p.major,
        course: p.course,
        meetingPreferences: p.meetingPreferences,
        meetingLocations: p.meetingLocations,
        groupSizePreference: p.groupSizePreference,
        photo: p.photo,
      }));

      setPartners(formatted);
    };

    fetchPartners();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Study Partners</h1>
      <PartnerList partners={partners} />
    </div>
  );
}
