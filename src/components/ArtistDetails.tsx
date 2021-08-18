import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { TrackDetail } from "../types/interfaces";
import "../App.css";

import { Container, Row, Image, Col, Card, Nav } from "react-bootstrap";

interface ArtistDetailsParams {
  id: string;
}

export default function ArtistDetails() {
  const id = useParams<ArtistDetailsParams>().id;

  const [artistDetails, setArtistDetails] = useState<TrackDetail | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id
      );
      if (!response.ok) return;
      const data = await response.json();
      setArtistDetails(data);
    })();
  }, []);

  return artistDetails ? (
    <Container>
      <Col id="track_details">
        <Image fluid src={artistDetails.artist.picture} />
        <Row>
          <Col lg={12}>
            <h3>{artistDetails.artist.name}</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Nav.Link href={`artist/${artistDetails.artist.name}`}>
              <h4>{artistDetails.artist.name}</h4>
            </Nav.Link>
          </Col>
        </Row>
      </Col>
    </Container>
  ) : null;
}
