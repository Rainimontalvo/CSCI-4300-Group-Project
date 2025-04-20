import React from "react";
import PartnerCard from "./PartnerCard";

interface Partner {
  id?: number;
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
      {partners.map((partner, index) => (
        <PartnerCard
        key={partner.id ?? index}
        {...partner}
        />
      ))}
    </div>
  );
};

export default PartnerList;
