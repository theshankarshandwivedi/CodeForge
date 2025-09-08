import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className="flex justify-between items-center px-8 py-4 border-b border-slate-800">
      <div className="flex items-center gap-4">
        <svg
          className="h-8 w-8 text-[var(--primary-color)]"
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <h1 className="text-2xl font-bold">CodeForge</h1>
      </div>
      <nav className="space-x-6 text-slate-300">
        <a href="/home" className="hover:text-white">
          Home
        </a>
        <a href="/challenges" className="hover:text-white">
          Challenges
        </a>
        <a href="/leaderboard" className="hover:text-white">
          Leaderboard
        </a>
      </nav>
      {user ? (
        <div className="space-x-2">
          <Button onClick={logout} variant="ghost" className="text-slate-300">
            Logout
          </Button>
        </div>
      ) : (
        <div className="space-x-2">
          <Button
            onClick={() => {
              navigate("/login");
              
            }}
            variant="ghost"
            className="text-slate-300"
          >
            Login
          </Button>
          <Button
            onClick={() => {
              navigate("/register");
            }}
            className="bg-slate-700 hover:bg-slate-600"
          >
            Register
          </Button>
        </div>
      )}
    </header>
  );
}
