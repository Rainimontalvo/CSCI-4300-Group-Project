import React from 'react';
import Image from 'next/image';

interface PartnerCardProps {
  name: string;
  gender: string;
  major: string;
  course: string;
  meetingPreferences: string;
  meetingLocations: string;
  groupSizePreference: string;
  photo: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  gender,
  major,
  course,
  meetingPreferences,
  meetingLocations,
  groupSizePreference,
  photo
}) => {
  const handleAdd = () => {
    alert(`You have added ${name} as a study partner!`);
  };

  return (
    <div className="relative mb-6 border-2 border-gray-300 rounded-xl p-6 bg-white shadow-sm flex flex-col gap-4">
      <button
        onClick={handleAdd}
        className="absolute top-4 right-4 bg-[#c9102f] text-white px-4 py-2 rounded-md hover:bg-[#a3001d] transition"
      >
        Add
      </button>

      <div className="flex gap-4 items-start">
        <Image
          src={photo}
          alt={`${name}'s photo`}
          width={80}
          height={80}
          className="rounded-full object-cover border"
        />

        <div className="space-y-1 text-left">
          <p><span className="font-bold">Name:</span> {name}</p>
          <p><span className="font-bold">Gender:</span> {gender}</p>
          <p><span className="font-bold">Major:</span> {major}</p>
          <p><span className="font-bold">Course:</span> {course}</p>
          <p><span className="font-bold">Meeting Preferences:</span> {meetingPreferences}</p>
          <p><span className="font-bold">Meeting Locations:</span> {meetingLocations}</p>
          <p><span className="font-bold">Group Size Preference:</span> {groupSizePreference}</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
