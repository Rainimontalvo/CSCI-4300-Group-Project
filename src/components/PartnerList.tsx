import React from "react";
import PartnerCard from "./PartnerCard";

interface Partner {
  id: number;
  name: string;
  gender: string;
  major: string;
  course: string;
  meetingPreferences: string;
  meetingLocations: string;
  groupSizePreference: string;
  photo: string;
}

const PartnerList = ({ partners }: { partners: Partner[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
  );
};

export default PartnerList;
