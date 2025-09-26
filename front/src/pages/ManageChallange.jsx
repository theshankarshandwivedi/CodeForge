import { Button } from "@/components/ui/button";

export default function ManageChallenges() {
  // Mock challenges
  const challenges = [
    { id: 1, title: "Two Sum", difficulty: "Easy", points: 100 },
    { id: 2, title: "Reverse Linked List", difficulty: "Medium", points: 200 },
  ];

  const handleDelete = (id) => {
    console.log("Delete challenge with id:", id);
    // TODO: call backend API
  };

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        Manage Challenges
      </h2>
      <div className="space-y-4">
        {challenges.map((ch) => (
          <div
            key={ch.id}
            className="flex justify-between items-center bg-slate-800 p-4 rounded-lg border border-slate-700"
          >
            <div>
              <h3 className="text-slate-200 font-semibold">{ch.title}</h3>
              <p className="text-slate-400 text-sm">
                {ch.difficulty} • {ch.points} pts
              </p>
            </div>
            <div className="space-x-2">
              <Button
                className="bg-slate-700 hover:bg-slate-600"
                onClick={() => console.log("Edit", ch.id)}
              >
                Edit
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-500"
                onClick={() => handleDelete(ch.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
