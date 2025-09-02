import './App.css'
import { LoginForm } from './components/login-form'
import { Button } from './components/ui/button'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

// let loggedin = false;

function App() {
  // const navigate = useNavigate();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;