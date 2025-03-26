import React from "react";
import GoogleMap from "../components/GoogleMap";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaVideo, FaMapMarkerAlt, FaTrafficLight, FaBroadcastTower } from "react-icons/fa";

const signals = [
  { id: 1, cameras: 8 },
  { id: 2, cameras: 8 },
  { id: 3, cameras: 7 },
];

const CameraFeeds = () => {
  return (
    <div className="p-4">
      {/* Page Header */}
      <h2 className="text-primary">
        <FaBroadcastTower className="text-danger" /> Live Traffic Camera Feeds
      </h2>
      <p>📡 Monitor real-time traffic conditions through AI-powered live feeds.</p>

      {/* Google Map Section */}
      <Card className="shadow-lg border-0 mb-4">
        <Card.Body>
          <Card.Title>
            <FaMapMarkerAlt className="text-success" /> Signal Locations on Map
          </Card.Title>
          <GoogleMap />
        </Card.Body>
      </Card>

      {/* Traffic Signal Wise Camera Feeds */}
      {signals.map((signal) => (
        <Card key={signal.id} className="shadow-lg border-0 mb-4">
          <Card.Body>
            <Card.Title className="text-danger">
              <FaTrafficLight /> Signal {signal.id} - Camera Feeds
            </Card.Title>
            <Row>
              {Array.from({ length: signal.cameras }).map((_, index) => (
                <Col md={3} sm={6} xs={12} key={index} className="mb-2">
                  <Button variant="dark" className="w-100">
                    <FaVideo /> Camera {index + 1}
                  </Button>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CameraFeeds;
