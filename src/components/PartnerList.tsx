import React from 'react';

type Partner = {
  id: number;
  name: string;
  gender: string;
  major: string;
  course: string;
  meetingPreferences: string;
  meetingLocations: string;
  groupSizePreference: string;
  photo: string;
};

type PartnerListProps = {
  partners: Partner[];
};

const PartnerList: React.FC<PartnerListProps> = ({ partners }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {partners.map((partner) => (
        <div key={partner.id} className="bg-white p-4 rounded-lg shadow">
          <img src={partner.photo} alt={`${partner.name} profile`} className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold">{partner.name}</h3>
          <p className="text-sm text-gray-600">{partner.gender} | {partner.major} | {partner.course}</p>
          <p className="text-sm text-gray-600">Prefers: {partner.meetingPreferences}</p>
          <p className="text-sm text-gray-600">Location: {partner.meetingLocations}</p>
          <p className="text-sm text-gray-600">Group Size: {partner.groupSizePreference}</p>
        </div>
      ))}
    </div>
  );
};

export default PartnerList;
