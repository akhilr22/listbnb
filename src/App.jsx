import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import { AuthProvider, useAuth } from './context/AuthProvider';
import HomeMain from './components/home/HomeMain';
import UserProfile from './components/userprofile/UserProfile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-gray-100">
          <Header />
          <Routes>
  <Route path="/" element={<AuthRoute />} />
  <Route path="/register" element={<Register />} />
  <Route path="/userprofile/*" element={<UserProfile />} />
</Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

function AuthRoute() {
  const { isAuthenticated } = useAuth(); 

  if (isAuthenticated) {
    return <HomeMain />;
  }
  return <Login />;
}

export default App;
