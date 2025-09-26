import './App.css'
import { LoginForm } from './components/login-form'
import { Button } from './components/ui/button'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './pages/Profile'
import Challenges from './pages/Challanges'
import ChallengeDetails from './pages/ChallengeDetails'
import AdminPanel from './pages/AdminPanel'
import AddChallenge from './pages/AddChallange'
import AddHackathon from './pages/AddHackathon'
import ManageChallenges from './pages/ManageChallange'
import ManageHackathons from './pages/ManageHackathons'
// import { useAuth } from './context/AuthContext'

// let loggedin = false;

function App() {
  // const navigate = useNavigate();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/challenges" element={<Challenges />} />
        <Route
          path="/challenges/:id"
          element={
            <ProtectedRoute>
              <ChallengeDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={
          <ProtectedRoute roles={["Admin"]}>
          <AdminPanel />
          </ProtectedRoute>
        } />
        <Route path="/admin/add-challenge" element={
          <ProtectedRoute roles={["Admin"]}>
          <AddChallenge />
          </ProtectedRoute>
        } />
        <Route path="/admin/manage-challenges" element={
          <ProtectedRoute roles={["Admin"]}>
          <ManageChallenges />
          </ProtectedRoute>
        } />
        <Route path="/admin/create-hackathon" element={
          <ProtectedRoute roles={["Admin"]}>
          <AddHackathon />
          </ProtectedRoute>
        } />
        <Route path="/admin/manage-hackathons" element={
          <ProtectedRoute roles={["Admin"]}>
          <ManageHackathons />
          </ProtectedRoute>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;