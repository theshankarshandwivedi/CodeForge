import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const dummyChallenges = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "HashMap"],
    points: 100,
  },
  {
    id: 2,
    title: "Binary Tree Zigzag",
    difficulty: "Medium",
    tags: ["Tree", "DFS"],
    points: 200,
  },
  {
    id: 3,
    title: "Graph Shortest Path",
    difficulty: "Hard",
    tags: ["Graph", "Dijkstra"],
    points: 300,
  },
];

export default function Challenges() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filteredChallenges =
    filter === "All"
      ? dummyChallenges
      : dummyChallenges.filter((c) => c.difficulty === filter);

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">
        Coding Challenges
      </h2>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Easy", "Medium", "Hard"].map((level) => (
          <Button
            key={level}
            variant={filter === level ? "default" : "outline"}
            className={
              filter === level
                ? "bg-slate-700 hover:bg-slate-600"
                : "border-slate-700 text-slate-300"
            }
            onClick={() => setFilter(level)}
          >
            {level}
          </Button>
        ))}
      </div>

      {/* Challenges List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-2">
              {challenge.title}
            </h3>
            <p className="text-slate-400 mb-3">Points: {challenge.points}</p>
            <div className="flex gap-2 mb-4">
              <Badge
                className={`${
                  challenge.difficulty === "Easy"
                    ? "bg-green-600/20 text-green-400"
                    : challenge.difficulty === "Medium"
                    ? "bg-yellow-600/20 text-yellow-400"
                    : "bg-red-600/20 text-red-400"
                }`}
              >
                {challenge.difficulty}
              </Badge>
              {challenge.tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  className="bg-slate-700 text-slate-300 hover:bg-slate-600"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <Button
              className="w-full bg-slate-700 hover:bg-slate-600"
              onClick={() => navigate(`/challenges/${challenge.id}`)}
            >
              Solve
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
