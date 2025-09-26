import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddChallenge() {
  const [challenge, setChallenge] = useState({
    title: "",
    description: "",
    difficulty: "Easy",
    points: 100,
    example: "",
  });

  const handleChange = (e) => {
    setChallenge({ ...challenge, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Challenge added:", challenge);
    // TODO: send to backend API
  };

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Add Challenge</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-slate-800 p-6 rounded-lg border border-slate-700"
      >
        <input
          type="text"
          name="title"
          value={challenge.title}
          onChange={handleChange}
          placeholder="Challenge Title"
          className="w-full p-3 bg-slate-900 border border-slate-700 rounded text-slate-200"
        />
        <textarea
          name="description"
          value={challenge.description}
          onChange={handleChange}
          placeholder="Challenge Description"
          rows="4"
          className="w-full p-3 bg-slate-900 border border-slate-700 rounded text-slate-200"
        />
        <select
          name="difficulty"
          value={challenge.difficulty}
          onChange={handleChange}
          className="w-full p-3 bg-slate-900 border border-slate-700 rounded text-slate-200"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <input
          type="number"
          name="points"
          value={challenge.points}
          onChange={handleChange}
          placeholder="Points"
          className="w-full p-3 bg-slate-900 border border-slate-700 rounded text-slate-200"
        />
        <textarea
          name="example"
          value={challenge.example}
          onChange={handleChange}
          placeholder="Example Input/Output"
          rows="3"
          className="w-full p-3 bg-slate-900 border border-slate-700 rounded text-slate-200"
        />
        <Button type="submit" className="bg-slate-700 hover:bg-slate-600">
          Add Challenge
        </Button>
      </form>
    </section>
  );
}
