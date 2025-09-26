import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import axios from "axios";

export default function ChallengeDetails() {
  const { id } = useParams();

  const languageMap = {
    javascript: 63,
    python: 71,
    cpp: 54,
    java: 62,
    c: 50,
  };

  const [stdin, setStdin] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState("// Write your solution here");
  const [output, setOutput] = useState("");
  const [activeTab, setActiveTab] = useState("input");

  const runCode = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/judge", {
        source_code: code,
        language_id: languageMap[language],
        stdin: stdin || "",
      });

      if (response.data.stdout) {
        setOutput(response.data.stdout);
      } else if (response.data.stderr) {
        setOutput(response.data.stderr);
      } else if (response.data.compile_output) {
        setOutput(response.data.compile_output);
      } else {
        setOutput("No output received.");
      }
      setActiveTab("output");
    } catch (error) {
      console.error("Error running code:", error);
      setOutput(
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. lorem50 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      );
    }
  };

  // Placeholder challenge
  const challenge = {
    id,
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. lorem50 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    difficulty: "Easy",
    points: 100,
    example: `Input: nums = [2,7,11,15], target = 9
Output: [0,1]`,
  };

  return (
    <section className="h-screen grid grid-cols-2 gap-4 p-4 bg-slate-900 text-slate-200">
      {/* Left: Problem Description */}
      <div className="overflow-y-auto p-6 bg-slate-800 rounded-lg">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">
          {challenge.title}
        </h2>
        <p className="text-slate-400 mb-6">{challenge.description}</p>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6">
          <h4 className="text-slate-200 font-semibold mb-2">Example</h4>
          <pre className="text-slate-400 text-sm whitespace-pre-wrap">
            {challenge.example}
          </pre>
        </div>

        <p className="text-slate-400">
          <strong>Difficulty:</strong> {challenge.difficulty} <br />
          <strong>Points:</strong> {challenge.points}
        </p>
      </div>

      {/* Right: Editor + Input/Output Tabs */}
      <div className="flex flex-col h-full overflow-hidden">
        {/* Language Select + Run */}
        <div className="flex justify-between items-center mb-2">
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              if (e.target.value !== "python") {
                setCode("// Write your solution here");
              }
              else{
                setCode("# Write your solution here");
              }
              setOutput("");
            }}
            className="bg-slate-800 text-slate-200 px-3 py-2 rounded-md border border-slate-700"
          >
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
          </select>
          <Button onClick={() => {runCode(); }} className="bg-slate-700 hover:bg-slate-600">
            Run Code
          </Button>
        </div>

        {/* Editor (big height) */}
        <div className="flex-1 border border-slate-700 rounded-lg overflow-hidden mb-2">
          <Editor
            height="100%"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </div>

        {/* Tabs for Input / Output */}
        <div className="bg-slate-800 rounded-lg flex flex-col h-40">
          {/* Tab Buttons */}
          <div className="flex border-b border-slate-700">
            <button
              onClick={() => setActiveTab("input")}
              className={`px-4 py-2 text-sm ${
                activeTab === "input"
                  ? "bg-slate-900 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Input
            </button>
            <button
              onClick={() => setActiveTab("output")}
              className={`px-4 py-2 text-sm ${
                activeTab === "output"
                  ? "bg-slate-900 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Output
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-3 bg-slate-900 rounded-b-lg">
            {activeTab === "input" ? (
              <textarea
                value={stdin}
                onChange={(e) => setStdin(e.target.value)}
                className="w-full h-full bg-slate-900 text-slate-200 resize-none outline-none"
                placeholder="Enter input for your program..."
              />
            ) : (
              <pre className="whitespace-pre-wrap text-slate-200 overflow-auto">{output}</pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
