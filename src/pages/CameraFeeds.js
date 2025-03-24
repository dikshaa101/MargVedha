import React from "react";
import GoogleMap from "../components/GoogleMap";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaVideo, FaMapMarkerAlt, FaTrafficLight } from "react-icons/fa";

const signals = [
  { id: 1, cameras: 8 },
  { id: 2, cameras: 8 },
  { id: 3, cameras: 7 },
];

const CameraFeed = () => {
  return (
    <div className="p-4">
      {/* Page Header */}
      <h2>
        <FaTrafficLight className="text-danger" /> Traffic Camera Feeds
      </h2>
      <p>Monitor live camera feeds from different traffic signals.</p>

      {/* Google Map Section */}
      <Card className="shadow-lg mb-4">
        <Card.Body>
          <Card.Title>
            <FaMapMarkerAlt className="text-primary" /> Signal Locations on Map
          </Card.Title>
          <GoogleMap />
        </Card.Body>
      </Card>

      {/* Traffic Signal Wise Camera Feeds */}
      {signals.map((signal) => (
        <Card key={signal.id} className="shadow-lg mb-4">
          <Card.Body>
            <Card.Title>
              <FaTrafficLight className="text-danger" /> Signal {signal.id} - Camera Feeds
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

export default CameraFeed;
