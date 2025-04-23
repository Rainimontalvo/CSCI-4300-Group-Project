"use client";

import { useEffect, useState } from "react";
import PartnerList from "@/components/PartnerList";

export default function ManagePartnersPage() {
  const [partnerList, setPartnerList] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const res = await fetch("/api/partners");
      const data = await res.json();
      setPartnerList(data.map((p: any) => ({ ...p, id: p._id })));
    };
    fetchPartners();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Partners</h1>
      <PartnerList partners={partnerList} />
    </div>
  );
}
