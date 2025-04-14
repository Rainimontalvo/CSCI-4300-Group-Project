import React from "react";
import PartnerCard from "./PartnerCard";
import partners from "@/data/partners";

/**
 * PartnerList Component
 * 
 * Displays a list of study partners by rendering multiple PartnerCard components.
 * This component fetches partner data and maps through the array to create
 * individual cards for each partner.
 */
const PartnerList = () => {
    return (
    <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8">We've found some study partners that are near to you</h2>
            <div className="space-y-0">
                {partners.map((partner) => (
                    <PartnerCard
                    key={partner.id}
                    name={partner.name}
                    gender={partner.gender}
                    major={partner.major}
                    course={partner.course}
                    meetingPreferences={partner.meetingPreferences}
                    meetingLocations={partner.meetingLocations}
                    groupSizePreference={partner.groupSizePreference} 
                    photo={partner.photo} 
                    /> 
                ))}
            </div>
        </div>
    );
};