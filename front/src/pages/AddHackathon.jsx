import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AddHackathonForm({ onSubmit }) {
  const [hackathon, setHackathon] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
    challenges: "",
    rules: "",
    prizes: "",
    status: "Upcoming",
    createdBy: "", // will usually be set automatically from logged-in admin
    maxParticipants: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHackathon({ ...hackathon, [name]: value });
  };

  return (
    <form
      className="max-w-3xl mx-auto text-white bg-slate-900/70 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 shadow-lg space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        // Convert challenges into array
        const formattedData = {
          ...hackathon,
          challenges: hackathon.challenges
            ? hackathon.challenges.split(",").map((id) => id.trim())
            : [],
        };
        onSubmit(formattedData);
      }}
    >
      <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text">
        Create Hackathon
      </h2>

      {/* Title */}
      <Input
        name="title"
        value={hackathon.title}
        onChange={handleChange}
        placeholder="Hackathon Title (e.g., CodeForge DSA Cup)"
        className="bg-slate-800 border-slate-700"
      />

      {/* Description */}
      <Textarea
        name="description"
        value={hackathon.description}
        onChange={handleChange}
        placeholder="Hackathon Description"
        className="bg-slate-800 border-slate-700"
      />

      {/* Start & End Time */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="datetime-local"
          name="startTime"
          value={hackathon.startTime}
          onChange={handleChange}
          className="bg-slate-800 border-slate-700"
        />
        <Input
          type="datetime-local"
          name="endTime"
          value={hackathon.endTime}
          onChange={handleChange}
          className="bg-slate-800 border-slate-700"
        />
      </div>

      {/* Challenges (IDs) */}
      <Input
        name="challenges"
        value={hackathon.challenges}
        onChange={handleChange}
        placeholder="Challenge IDs (comma separated)"
        className="bg-slate-800 border-slate-700"
      />

      {/* Rules */}
      <Textarea
        name="rules"
        value={hackathon.rules}
        onChange={handleChange}
        placeholder="Rules / Guidelines"
        className="bg-slate-800 border-slate-700"
      />

      {/* Prizes */}
      <Textarea
        name="prizes"
        value={hackathon.prizes}
        onChange={handleChange}
        placeholder="Prizes (optional)"
        className="bg-slate-800 border-slate-700"
      />

      {/* Status */}
      <select
        name="status"
        value={hackathon.status}
        onChange={handleChange}
        className="bg-slate-800 text-slate-200 px-3 py-2 rounded-md border border-slate-700 w-full"
      >
        <option>Upcoming</option>
        <option>Ongoing</option>
        <option>Completed</option>
      </select>

      {/* Created By */}
      <Input
        name="createdBy"
        value={hackathon.createdBy}
        onChange={handleChange}
        placeholder="Created By (Admin ID)"
        className="bg-slate-800 border-slate-700"
      />

      {/* Max Participants */}
      <Input
        type="number"
        name="maxParticipants"
        value={hackathon.maxParticipants}
        onChange={handleChange}
        placeholder="Max Participants (optional)"
        className="bg-slate-800 border-slate-700"
      />

      {/* Submit */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500"
      >
        Save Hackathon
      </Button>
    </form>
  );
}
