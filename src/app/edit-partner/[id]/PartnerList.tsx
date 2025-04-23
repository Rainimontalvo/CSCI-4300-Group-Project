import React from 'react';
import PartnerCard from './PartnerCard';

interface Partner {
  id: string;
  name: string;
  gender: string;
  major: string;
  course: string;
  meetingPreferences: string;
  meetingLocations: string;
  groupSizePreference: string;
  photo: string;
}

interface PartnerListProps {
  partners: Partner[];
}

const PartnerList: React.FC<PartnerListProps> = ({ partners }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {partners.map((partner) => (
        <PartnerCard key={partner.id} {...partner} />
      ))}
    </div>
  );
};

export default PartnerList;
