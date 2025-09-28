import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AddChallengeForm({ onSubmit }) {
  const [challenge, setChallenge] = useState({
    title: "",
    description: "",
    inputFormat: "",
    outputFormat: "",
    constraints: "",
    difficulty: "Easy",
    points: 100,
    tags: "",
    examples: [{ input: "", output: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChallenge({ ...challenge, [name]: value });
  };

  const handleExampleChange = (index, field, value) => {
    const updatedExamples = [...challenge.examples];
    updatedExamples[index][field] = value;
    setChallenge({ ...challenge, examples: updatedExamples });
  };

  const addExample = () => {
    setChallenge({
      ...challenge,
      examples: [...challenge.examples, { input: "", output: "" }],
    });
  };

  return (
    <form
      className="max-w-3xl mx-auto text-white bg-slate-900/70 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 shadow-lg space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(challenge);
      }}
    >
      <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
        Add New Challenge
      </h2>

      <Input
        name="title"
        value={challenge.title}
        onChange={handleChange}
        placeholder="Challenge Title"
        className="bg-slate-800 border-slate-700"
      />

      <Textarea
        name="description"
        value={challenge.description}
        onChange={handleChange}
        placeholder="Problem Description"
        className="bg-slate-800 border-slate-700"
      />

      <div className="grid grid-cols-2 gap-4">
        <Textarea
          name="inputFormat"
          value={challenge.inputFormat}
          onChange={handleChange}
          placeholder="Input Format"
          className="bg-slate-800 border-slate-700"
        />
        <Textarea
          name="outputFormat"
          value={challenge.outputFormat}
          onChange={handleChange}
          placeholder="Output Format"
          className="bg-slate-800 border-slate-700"
        />
      </div>

      <Textarea
        name="constraints"
        value={challenge.constraints}
        onChange={handleChange}
        placeholder="Constraints"
        className="bg-slate-800 border-slate-700"
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          name="points"
          value={challenge.points}
          onChange={handleChange}
          placeholder="Points"
          className="bg-slate-800 border-slate-700"
        />

        <select
          name="difficulty"
          value={challenge.difficulty}
          onChange={handleChange}
          className="bg-slate-800 text-slate-200 px-3 py-2 rounded-md border border-slate-700"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <Input
        name="tags"
        value={challenge.tags}
        onChange={handleChange}
        placeholder="Tags (comma separated)"
        className="bg-slate-800 border-slate-700"
      />

      <div className="space-y-3">
        <h3 className="text-slate-200 font-semibold">Examples</h3>
        {challenge.examples.map((ex, i) => (
          <div
            key={i}
            className="grid grid-cols-2 gap-4 bg-slate-800/60 p-4 rounded-lg border border-slate-700"
          >
            <Textarea
              value={ex.input}
              onChange={(e) => handleExampleChange(i, "input", e.target.value)}
              placeholder="Example Input"
              className="bg-slate-900 border-slate-700"
            />
            <Textarea
              value={ex.output}
              onChange={(e) => handleExampleChange(i, "output", e.target.value)}
              placeholder="Example Output"
              className="bg-slate-900 border-slate-700"
            />
          </div>
        ))}
        <Button type="button" onClick={addExample} variant="secondary">
          + Add Example
        </Button>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-500"
      >
        Save Challenge
      </Button>
    </form>
  );
}
