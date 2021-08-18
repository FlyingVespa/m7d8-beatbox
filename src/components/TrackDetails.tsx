import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { TrackDetail, Result } from "../types/interfaces";
import "../App.css";

import { Container, Row, Image, Col, Card, Nav } from "react-bootstrap";

interface TrackDetailsParams {
  id: string;
}

export default function TrackDetails() {
  const id = parseInt(useParams<TrackDetailsParams>().id);

  const [trackDetails, setTrackDetails] = useState<TrackDetail | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/track/" + id
      );

      if (!response.ok) return;

      const data = await response.json();
      setTrackDetails(data);
    })();
  }, []);

  return trackDetails ? (
    <Container>
      <Col id="track_details">
        <Image fluid src={trackDetails.album.cover_big} />
        <Row>
          <Col lg={12}>
            <h3>{trackDetails.title}</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Nav.Link href={`artist/${trackDetails.artist.name}`}>
              <h4>{trackDetails.artist.name}</h4>{" "}
            </Nav.Link>
          </Col>
        </Row>
      </Col>
    </Container>
  ) : null;
}
