import { Button } from "@/components/ui/button";

export default function ManageHackathons() {
  // Mock hackathons
  const hackathons = [
    { id: 1, name: "Code Sprint", start: "2025-09-20", end: "2025-09-22" },
    { id: 2, name: "Algo Clash", start: "2025-10-05", end: "2025-10-07" },
  ];

  const handleDelete = (id) => {
    console.log("Delete hackathon with id:", id);
    // TODO: call backend API
  };

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        Manage Hackathons
      </h2>
      <div className="space-y-4">
        {hackathons.map((h) => (
          <div
            key={h.id}
            className="flex justify-between items-center bg-slate-800 p-4 rounded-lg border border-slate-700"
          >
            <div>
              <h3 className="text-slate-200 font-semibold">{h.name}</h3>
              <p className="text-slate-400 text-sm">
                {h.start} → {h.end}
              </p>
            </div>
            <div className="space-x-2">
              <Button
                className="bg-slate-700 hover:bg-slate-600"
                onClick={() => console.log("Edit", h.id)}
              >
                Edit
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-500"
                onClick={() => handleDelete(h.id)}
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
