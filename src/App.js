import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import BusRoutes from "./pages/BusRoutes";
import BlockchainTicketing from "./pages/BlockchainTicketing";
import EmergencyAlerts from "./pages/EmergencyAlerts";
import FareUpdates from "./pages/FareUpdates";
import TrafficData from "./pages/TrafficData";
import MapLocation from "./pages/MapLocation"
import CameraFeeds from "./pages/CameraFeeds"
import Alerts from "./pages/Alerts"
import Reports from "./pages/Reports"
import Settings from "./pages/Settings"

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
          <Route path="/bus-routes" element={<BusRoutes />} />
          <Route path="/blockchain-ticketing" element={<BlockchainTicketing />} />
          <Route path="/emergency-alerts" element={<EmergencyAlerts />} />
          <Route path="/fare-updates" element={<FareUpdates />} />
          <Route path="/traffic-data" element={<TrafficData />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
