import { Routes, Route } from 'react-router-dom';
import RootLayout from './rootlayout/RootLayout';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Nested route inside layout */}
        <Route path="/" element={<HomePage />} /> {/* This means "/" */}
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
