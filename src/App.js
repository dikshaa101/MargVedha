import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import TrafficMonitor from "./components/TrafficMonitor";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Alerts from "./pages/Alerts";
import MapLocation from "./pages/MapLocation";
import CameraFeeds from "./pages/CameraFeeds";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/google-map" element={<MapLocation />} />
          <Route path="/camera-feeds" element={<CameraFeeds />} />
          <Route path="/traffic-alerts" element={<Alerts />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
