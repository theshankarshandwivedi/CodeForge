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
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/:id" element={
          <ProtectedRoute>
            <ChallengeDetails />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;