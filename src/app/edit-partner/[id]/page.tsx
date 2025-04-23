"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPartnerPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    major: "",
    course: "",
    meetingPreferences: "",
    meetingLocations: "",
    groupSizePreference: "",
    photo: "",
  });

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const res = await fetch(`/api/partners/${params.id}`);
        const data = await res.json();
        if (res.ok) {
          setFormData(data);
        } else {
          alert(data.error || "Failed to load partner");
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchPartner();
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/partners/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Partner updated!");
      router.push("/partners");
    } else {
      const data = await res.json();
      alert(data.error || "Update failed.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Edit Partner</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label className="block font-medium mb-1 capitalize">{key}</label>
            <input
              name={key}
              value={value}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
