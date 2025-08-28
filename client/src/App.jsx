import useTheme, { themes } from './useTheme';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header';
import AuctionLayout from './components/Dashboard/AuctionLayout';

function AppContent({ theme, handleThemeChange }) {
  const location = useLocation();
  const hideHeader = location.pathname === "/auction";

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {!hideHeader && <Header />}
      <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Dashboard theme={theme} handleThemeChange={handleThemeChange} />} />
          <Route path="/auction" element={<AuctionLayout theme={theme} handleThemeChange={handleThemeChange} />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  const { theme, handleThemeChange } = useTheme();
  return (
    <Router>
      <AppContent theme={theme} handleThemeChange={handleThemeChange} />
    </Router>
  );
}

export default App;