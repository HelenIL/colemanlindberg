import { useRef, useState, useContext } from "react";
import cover from "../../assets/album_cover_idea2.jpg";
import prev from "../../assets/skip-backward.svg";
import next from "../../assets/skip-forward.svg";
import guitar from "../../assets/cl_gt_only.svg";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import tracks from "../../albums/circus/tracklist";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { ListGroupItem } from "react-bootstrap";
import { blurbs } from "../../albums/circus/extras";
import "./newAlbum.css";

type Toggle = {
  children: React.ReactNode;
  eventKey: string;
};

function CustomToggle({ children, eventKey }: Toggle) {
  const decoratedOnClick = useAccordionButton(eventKey, () => undefined);

  const { activeEventKey } = (useContext(AccordionContext) as any) || {};
  const isActive = activeEventKey === eventKey;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      decoratedOnClick(e as any);
    }
  };

  return (
    <span
      role="button"
      className="custom-arrow"
      tabIndex={0}
      aria-expanded={isActive}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: 4,
        cursor: "pointer",
      }}
      onClick={(e) => {
        e.stopPropagation();
        decoratedOnClick(e as any);
      }}
      onKeyDown={onKeyDown}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{
          transition: "transform 180ms ease",
          transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
          display: "block",
        }}
      >
        <path
          fill="currentColor"
          d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
        />
      </svg>
    </span>
  );
}

export default function NewAlbumSubpage() {
  const [current, setCurrent] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % tracks.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  //  const handlePlayPause = () => {

  //   if (isPlaying) {
  //     audioRef.current?.pause();
  //   } else {
  //  audioRef.current?.play();
  //   }
  //   setIsPlaying(!isPlaying);

  // };

  // const handlePlay = (idx: number) => {

  //   setCurrent(idx);

  //   setTimeout(() => {
  //     audioRef.current?.play();
  //   }, 0);
  //   }

  const handlePlay = (idx: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent(idx);
    setTimeout(() => {
      audioRef.current
        ?.play()
        .catch((err) => console.error("play failed", err));
    }, 0);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % tracks.length);
    setTimeout(() => {
      audioRef.current?.play();
    }, 0);

    if (current === tracks.length - 1) {
      setCurrent(0);
    }
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1) % tracks.length);
    setTimeout(() => {
      audioRef.current?.play();
    }, 0);
  };

  return (
    <div style={{ marginRight: "30px", marginLeft: "30px" }}>
      <div
        className="album-header-div"
      >
        <p className="album-header" style={{ color: "white" }}>
          N e w  &nbsp; A l b u m &nbsp; O u t &nbsp; N o w
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card className="album-cover">
          <Card.Img src={cover} />
        </Card>
      </div>

      <div className="outer-div">
        <div className="inner-div">
          <div>
            <Card className="card-style border-0 opacity-75">
              <Card.Body>
                <Card.Text
                  style={{ fontSize: "1rem", color: "gray", marginTop: "10px", textAlign: "center" }}
                >
                  Now Playing :
                </Card.Text>
                <Card.Text style={{ textAlign: "center" }}>
                  {tracks[current]?.name}
                </Card.Text>

                <Card.Text style={{ textAlign: "center", marginTop: "10px" }}>
                  <audio ref={audioRef} controls src={tracks[current]?.url}>
                    Your browser does not support the audio element.
                  </audio>
                  <Card.Text
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <Button
                      className=" player-button"
                      onClick={handlePrev}
                      disabled={tracks[current].id === 0}
                    >
                      <img src={prev} alt="Previous" width="20" height="20" />
                    </Button>
                    <img
                      style={{
                        height: "50px",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                      src={guitar}
                    ></img>

                    <Button className="player-button" onClick={handleNext}>
                      <img src={next} alt="Next" width="20" height="20" />
                    </Button>
                  </Card.Text>
                </Card.Text>

                {/* <ListGroup>
          {tracks.map((t, i) => (
            <ListGroup.Item key={t.id} action  onClick={() => handlePlay(i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div >{t.name}</div>
                  
                </div>
                
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup> */}

                <Accordion>
                  {tracks.map((t, i) => (
                    <ListGroup.Item key={t.id} className="p-0 border-0">
                      <Accordion>
                        <Accordion.Item eventKey={String(i)}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "100%",
                              padding: "0.375rem 1rem",
                              cursor: "default",
                            }}
                          >
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePlay(i, e);
                              }}
                              style={{ cursor: "pointer", flex: 1 }}
                            >
                              {t.name}
                            </span>
                            <CustomToggle eventKey={String(i)}>▾</CustomToggle>
                          </div>
                          <Accordion.Body style={{ whiteSpace: "pre-wrap" }}>
                            {t.lyrics}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </ListGroup.Item>
                  ))}
                </Accordion>
              </Card.Body>
            </Card>
          </div>

          <div className="blurb-div">
            <div className="carousel-container">
              <div className="carousel-card border-0 opacity-75">
                <div style={{ textAlign: "center" }}>
                  <h4>{blurbs[currentCard]?.track}</h4>
                  <p className="blurb-text">{blurbs[currentCard]?.blurb}</p>
                </div>
              </div>

              <div className="carousel-buttons">
                <div>
                  <Button
                    variant="light"
                    className="card-button"
                    onClick={prevCard}
                  >
                    <img src={prev} alt="Previous" width="40" height="20" />
                  </Button>
                </div>
                <div className="carousel-indicators">
                  {tracks.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === currentCard ? "active" : ""}`}
                    ></span>
                  ))}
                </div>
                <div>
                  <Button
                    variant="light"
                    className="card-button"
                    onClick={nextCard}
                  >
                    <img src={next} alt="Next" width="30" height="20" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
