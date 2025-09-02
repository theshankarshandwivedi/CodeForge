import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LeaderboardPreview from "@/components/LeaderboardPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <LeaderboardPreview />
      <Footer />
    </div>
  );
}
