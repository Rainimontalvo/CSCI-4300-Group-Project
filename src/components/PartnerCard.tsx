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

/**
 * PartnerCard Component
 * 
 * Displays information about a single study partner in a card format.
 * Each card shows the partner's personal details and study preferences,
 * along with an "Add" button to connect with them.
 */
const PartnerCard: React.FC<PartnerCardProps> = ({
    name, gender, major, course, meetingPreferences, meetingLocations, groupSizePreference, photo
}) => {
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

            <button
                className="absolute top-5 right-5 bg-[var(--primary-color)] text-white py-2 px-8 rounded-md hover:opacity-90"
                >
                    Add
            </button>
        </div>
    );
};

export default PartnerCard;