import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import axios from "axios";

export default function ChallengeDetails() {
  const { id } = useParams();

  const languageMap = {
    javascript: 63, // Node.js 18.x
    python: 71, // Python 3.11
    cpp: 54, // C++ (GCC 13.2.0)
    java: 62, // Java (OpenJDK 17)
    c: 50, // C (GCC 13.2.0)
  };

  const [stdin, setStdin] = useState("");

  const runCode = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/judge", {
        source_code: code, // `code` should be the state where your editor stores code
        language_id: languageMap[language], // Map selected language
        stdin: stdin || "", // optional input if you add testcases
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

      console.log("Execution result:", response.data);
    } catch (error) {
      console.error("Error running code:", error);
    }
  };

  // Placeholder challenge
  const challenge = {
    id,
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    difficulty: "Easy",
    points: 100,
    example: `Input: nums = [2,7,11,15], target = 9
Output: [0,1]`,
  };

  // State for editor
  const [language, setLanguage] = useState("C++");
  const [code, setCode] = useState("// Write your solution here");
  const [output, setOutput] = useState("");

  return (
    <section className="px-6 py-12">
      {/* Challenge Title */}
      <h2 className="text-3xl font-bold text-slate-100 mb-4">
        {challenge.title}
      </h2>
      <p className="text-slate-400 mb-6">{challenge.description}</p>

      {/* Example */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mb-6">
        <h4 className="text-slate-200 font-semibold mb-2">Example</h4>
        <pre className="text-slate-400 text-sm">{challenge.example}</pre>
      </div>

      {/* Code Editor */}
      <div className="mb-4 flex justify-between items-center">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-slate-800 text-slate-200 px-3 py-2 rounded-md border border-slate-700"
        >
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
        <Button onClick={runCode} className="bg-slate-700 hover:bg-slate-600">
          Run Code
        </Button>
      </div>

      <div className="border border-slate-700 rounded-lg overflow-hidden">
        <Editor
          height="400px"
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
      <div className="mt-4">
        <h3 className="text-slate-900 mb-2 font-bold">Custom Input (stdin)</h3>
        <textarea
          value={stdin}
          onChange={(e) => setStdin(e.target.value)}
          placeholder="Enter input for your program"
          className="w-full h-24 bg-slate-800 text-slate-200 p-3 rounded-md border border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
      </div>

      <div className="mt-4 p-4 bg-slate-900 border border-slate-700 rounded-md text-slate-200">
        <h3 className="font-semibold mb-2">Output:</h3>
        <pre className="whitespace-pre-wrap">{output}</pre>
      </div>
    </section>
  );
}
