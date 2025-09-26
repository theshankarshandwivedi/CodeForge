import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const actions = [
    { title: "Add Challenge", path: "/admin/add-challenge" },
    { title: "Manage Challenges", path: "/admin/manage-challenges" },
    { title: "Create Hackathon", path: "/admin/create-hackathon" },
    { title: "Manage Hackathons", path: "/admin/manage-hackathons" },
  ];

  return (
    <section className="px-8 py-12">
      <h2 className="text-3xl font-bold text-slate-500 mb-8">
        Admin Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actions.map((action, index) => (
          <Card
            key={index}
            className="bg-slate-800 border border-slate-700 hover:shadow-lg hover:shadow-slate-900 cursor-pointer transition transform hover:-translate-y-1"
            onClick={() => navigate(action.path)}
          >
            <CardHeader>
              <CardTitle className="text-slate-200">{action.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="bg-slate-700 hover:bg-slate-600">Go</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
