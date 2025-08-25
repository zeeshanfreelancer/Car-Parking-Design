import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header';
import AuctionLayout from './components/Dashboard/AuctionLayout';

function AppContent() {
  const location = useLocation();

  // hide header only on /auction
  const hideHeader = location.pathname === "/auction";

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Fixed header (only if not /auction) */}
      {!hideHeader && <Header />}

      {/* Routes */}
      <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auction" element={<AuctionLayout />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
