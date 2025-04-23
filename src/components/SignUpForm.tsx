"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    major: "",
    academicYear: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Signup error:", data.error);
        alert(`Error: ${data.error}`);
        return;
      }

      console.log("Signup successful:", data);
      router.push("/partners");
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-white px-12 py-10 max-w-2xl mx-auto rounded-lg shadow">
      <div className="flex">
        <h1 className="text-3xl font-bold mb-3 ml-[44rem]">Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center space-y-[2.5rem]">

          {/* First & Last Name */}
          <div className="flex gap-x-6">
            <div className="flex flex-col items-start">
              <label className="block text-base font-semibold mb-2">First name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-[150px] h-10 px-3 text-sm border rounded"
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="block text-base font-semibold mb-2">Last name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-[147px] h-10 px-3 text-sm border rounded"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-start">
            <label className="block text-base font-semibold mb-2">Email address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[300px] h-10 px-3 text-sm border border-red-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="email@uga.edu"
              required
            />
          </div>

          {/* Username */}
          <div className="flex flex-col items-start">
            <label className="block text-base font-semibold mb-2">Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-[300px] h-10 px-3 text-sm border rounded"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col items-start">
            <label className="block text-base font-semibold mb-2">Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-[300px] h-10 px-3 text-sm border rounded"
              required
            />
          </div>

          {/* Major */}
          <div className="flex flex-col items-start">
            <label className="block text-base font-semibold mb-2">Major</label>
            <input
              name="major"
              value={formData.major}
              onChange={handleChange}
              className="w-[300px] h-10 px-3 text-sm border rounded-xl"
              placeholder="For example: Computer Science, Chemistry"
            />
          </div>

          {/* Academic Year */}
          <div className="flex flex-col items-start">
            <label className="block text-base font-semibold mb-2">Academic Year</label>
            <input
              name="academicYear"
              value={formData.academicYear}
              onChange={handleChange}
              className="w-[300px] h-10 px-3 text-sm border rounded"
              placeholder="Freshman, Sophomore, etc."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="!bg-red-700 !text-white px-6 py-2 mt-4 !rounded !hover:bg-red-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
