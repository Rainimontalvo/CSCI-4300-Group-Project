import React, { useState } from 'react';
import Image from 'next/image';
import MapComponent from './MapComponent';
import { useRouter } from 'next/navigation';

interface PartnerCardProps {
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

const PartnerCard: React.FC<PartnerCardProps> = ({
  id, name, gender, major, course, meetingPreferences, meetingLocations, groupSizePreference, photo
}) => {
  const router = useRouter();
  const [showMap, setShowMap] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = confirm(`Are you sure you want to delete ${name}?`);
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/partners/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Error: ${data.error}`);
        return;
      }

      alert("Partner deleted!");
      // Optionally: refresh list or remove card from state
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete.");
    }
  };

  const handleEdit = () => {
    router.push(`/edit-partner/${id}`);
  };

  return (
    <div className='mb-6 border-2 border-[var(--grey-color)] rounded-xl p-6 bg-white relative'>
      <Image
        src={photo}
        alt={`${name}'s photo`}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />

      <div className="space-y-2">
        <p><span className='font-bold'>Name:</span> {name}</p>
        <p><span className='font-bold'>Gender:</span> {gender}</p>
        <p><span className="font-bold">Major:</span> {major}</p>
        <p><span className="font-bold">Course:</span> {course}</p>
        <p><span className="font-bold">Meeting Preferences:</span> {meetingPreferences}</p>
        <p><span className="font-bold">Meeting Locations:</span> {meetingLocations}</p>
        <p><span className="font-bold">Group Size Preference:</span> {groupSizePreference}</p>
      </div>

      <div className="flex gap-2 absolute top-5 right-5">
        <button
          className="bg-[var(--primary-color)] text-white py-2 px-6 rounded hover:opacity-90"
        >
          Add
        </button>

        <button
          onClick={handleEdit}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>

      <button
        onClick={() => setShowMap(!showMap)}
        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
      >
        {showMap ? "Hide Directions" : "Show Directions"}
      </button>

      {showMap && (
        <div className="mt-4">
          <MapComponent destination={`${meetingLocations}, Athens, GA`} />
        </div>
      )}
    </div>
  );
};

export default PartnerCard;
