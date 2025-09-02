import { useEffect, useState } from "react";

export default function LeaderboardPreview() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("/api/leaderboard") // replace with real endpoint
      .then((res) => res.json())
      .then((data) => setLeaders(data));
  }, []);

  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Leaderboard Preview
      </h2>
      <div className="overflow-hidden rounded-xl border border-slate-700">
        <table className="w-full text-left text-slate-300">
          <thead className="bg-slate-800 text-slate-400">
            <tr>
              <th className="px-6 py-3">Rank</th>
              <th className="px-6 py-3">User</th>
              <th className="px-6 py-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((user, i) => (
              <tr key={user.id} className="border-t border-slate-700">
                <td className="px-6 py-4">{i + 1}</td>
                <td className="px-6 py-4 flex items-center space-x-2">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{user.name}</span>
                </td>
                <td className="px-6 py-4">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
