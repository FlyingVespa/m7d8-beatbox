import { Result } from "../types/interfaces";
import { Card, Col, Row, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ScaleLoader, RingLoader } from "react-spinners";

interface MusicListProps {
  songs: Result[];
  isLoading: boolean;
}

const MusicList = ({ songs, isLoading }: MusicListProps) => {
  return (
    <>
      <Row>
        {songs &&
          songs.map((song) => (
            <Col lg={3} md={6} sm={12} key={song.id} className="mt-2">
              {!isLoading ? (
                <>
                  <Image
                    src={song.artist.picture}
                    alt="artist"
                    id="artist-image"
                  />

                  <Card className="card">
                    <Card.Body>
                      <Row className="m-0">
                        <Nav.Link href={`track/${song.id}`}>
                          <h5>{song.title_short}</h5>
                        </Nav.Link>
                      </Row>
                      <Row className="m-0 p-0">
                        <Nav.Link href={`artist/${song.artist.name}`}>
                          {song.artist.name}
                        </Nav.Link>
                      </Row>
                    </Card.Body>

                    <Card.Img
                      src={song.album.cover_big}
                      className="card-cover-image"
                    />
                  </Card>
                </>
              ) : (
                <ScaleLoader />
              )}
            </Col>
          ))}
      </Row>
    </>
  );
};

export default MusicList;
