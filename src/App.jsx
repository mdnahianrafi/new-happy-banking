import { Routes, Route } from 'react-router-dom';
import RootLayout from './rootlayout/RootLayout';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ForgotPassword from './pages/ForgotPasswordPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Nested route inside layout */}
        <Route path="/" element={<HomePage />} /> {/* This means "/" */}
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/reset-password" element={<ForgotPassword/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
  );
}

export default App;
