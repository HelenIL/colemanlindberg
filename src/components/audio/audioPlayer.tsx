import { useRef, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import prev from "../../assets/angle-left-solid-full.svg";
import next from "../../assets/angle-right-solid-full.svg";
import guitar from "../../assets/cl_gt_only.svg";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import "./audio.css";
import { PrevButton, NextButton } from "./audioButton";



type Track = {
  name: string;
  artist: string;
  album: string;
  url: string;
  id: number;
  image: string;
  pic: string;
  lyrics: string;
};

type Album = {
  album: string;
  cover: string;
  color: string;
  pic: string;
  blurbs?: string;
  about?: string;
  tracks: Track[]
}

type AudioPlayerProps = {
  album: Album;
  isTrue?: boolean;
};

type Toggle = {
  children: React.ReactNode;
  eventKey: string;
  color: string;
};

type AudioHeader = {
  props: string;
}

function AudioHeader({props}: AudioHeader) {
  const dynamicStyle = {
    textShadow: `1px 1px 1px ${props}`,
    color: 'gray'
  };

  return (
    <h4 style={dynamicStyle}>
      LISTEN  &nbsp; TO  &nbsp; THE  &nbsp; ALBUM
    </h4>
  );
}

function AudioButton({props}: AudioHeader) {
  const dynamicStyle = {
    textShadow: `1px 1px 1px ${props}`,
    color: 'gray'
  };

  return (
    <h4 style={dynamicStyle}>
      LISTEN  &nbsp; TO  &nbsp; THE  &nbsp; ALBUM
    </h4>
  );
}

function CustomToggle({ children, eventKey, color }: Toggle) {
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
        color: color
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

export default function AudioPlayer({ album }: AudioPlayerProps) {
  const [current, setCurrent] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  //  const handlePlayPause = () => {

  //   if (isPlaying) {
  //     audioRef.current?.pause();
  //   } else {
  //  audioRef.current?.play();
  //   }
  //   setIsPlaying(!isPlaying);

  // };

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
    setCurrent((prev) => (prev + 1) % album.tracks.length);
    setTimeout(() => {
      audioRef.current?.play();
    }, 0);

    if (current === album.tracks.length - 1) {
      setCurrent(0);
    }
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1) % album.tracks.length);
    setTimeout(() => {
      audioRef.current?.play();
    }, 0);
  };

  return (
    <div className="ap-outer"> 
    <div className="ap-header">
           <span className="ap-header-span" > <AudioHeader props={album.color}/></span>
          </div>
 
      <div >
        <div >
          <div className="card-test">
            <Card className="card-style rounded-0 border-0 opacity-75 ">
              <Card.Body >
                <Card.Text
                className="ap-now-playing"
                  
                >
                  Now Playing :
                </Card.Text>
                <Card.Text className="ap-current-track">
                  {album.tracks[current]?.name}
                </Card.Text>

                <Card.Text className="ap-audio-error">
                  <audio ref={audioRef} controls src={album.tracks[current]?.url}>
                    Your browser does not support the audio element.
                  </audio>
                  <div
                    // style={{
                    //   textAlign: "center",
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   gap: 20,
                    // }}
                  >
                    <PrevButton color={album.color} onClick={handlePrev}
                      disabled={album.tracks[current].id === 0}/>
                    {/* <Button
                      className="ap-player-button rounded-0"
                      style={{ }}
                      onClick={handlePrev}
                      disabled={album.tracks[current].id === 0}
                    >
                      <img src={prev} alt="Previous" width="20" height="20" />
                    </Button> */}
                    <img
                    className="ap-guitar"
                      src={guitar}
                    ></img>
                    <NextButton color={album.color} onClick={handleNext} />
                    {/* <Button className="ap-player-button rounded-0" onClick={handleNext}>
                      <img src={next} alt="Next" width="20" height="20" />
                    </Button> */}
                  </div>
                </Card.Text>

                <Accordion>
                  {album.tracks.map((t, i) => (
                    <ListGroup.Item
                      key={t.id}
                      className="p-0 border-0 ap-list-item"
                    >
                      <Accordion>
                        <Accordion.Item eventKey={String(i)}>
                          <div
                          className="ap-track"
                            
                          >
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePlay(i, e);
                              }}
                              className="ap-track-span"
                             
                            >
                              {t.name}
                            </span>
                            <CustomToggle color={album.color} eventKey={String(i)}>▾</CustomToggle>
                          </div>
                          <Accordion.Body>
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

         
        </div>
       
      </div>
    </div>
  );
}
