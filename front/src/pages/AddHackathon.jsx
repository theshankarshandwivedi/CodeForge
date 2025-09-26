import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddHackathon() {
  const [hackathon, setHackathon] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setHackathon({ ...hackathon, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hackathon created:", hackathon);
    // TODO: send to backend API
  };

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        Create Hackathon
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-slate-800 p-6 rounded-lg border border-slate-700"
      >
        <input
          type="text"
          name="name"
          value={hackathon.name}
          onChange={handleChange}
          placeholder="Hackathon Name"
          className="w-full p-3 bg-slate-900 border border-slate-700 rounded text-slate-200"
        />
        <textarea
          name="description"
          value={hackathon.description}
          onChange={handleChange}
          placeholder="Hackathon Description"
          rows="4"
          className="w-full p-3 bg-slate-900 border border-slate-700 rounded text-slate-200"
        />
        <div className="flex gap-4">
          <input
            type="date"
            name="startDate"
            value={hackathon.startDate}
            onChange={handleChange}
            className="flex-1 p-3 bg-slate-900 border border-slate-700 rounded text-slate-200"
          />
          <input
            type="date"
            name="endDate"
            value={hackathon.endDate}
            onChange={handleChange}
            className="flex-1 p-3 bg-slate-900 border border-slate-700 rounded text-slate-200"
          />
        </div>
        <Button type="submit" className="bg-slate-700 hover:bg-slate-600">
          Create Hackathon
        </Button>
      </form>
    </section>
  );
}
