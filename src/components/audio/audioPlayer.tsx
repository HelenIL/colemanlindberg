import { useRef, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import download from "../../assets/download.svg"
import guitar from "../../assets/cl_gt_only.svg";
import { PrevButton, NextButton } from "../buttons/buttons";
import { Album } from "../subpages/types";
import "./audio.css";

type AudioPlayerProps = {
  album: Album;
  isTrue?: boolean;
  id?: string;
};

type Toggle = {
  children: React.ReactNode;
  eventKey: string;
  color: string;
};

type AudioHeader = {
  props: string;
};

type TrackHeader = {
  text: string;
  color: string;
};

function AudioHeader({ props }: AudioHeader) {
  const dynamicStyle = {
    textShadow: `1px 1px 1px ${props}`,
    color: "white",
  };

  return <div><h4 style={dynamicStyle}>LISTEN</h4></div>;
}

function NowPlaying({ props }: AudioHeader) {
  const dynamicStyle = {
    color: `${props}`,
    backgroundColor: "rgb(94, 94, 94, .45)",
    textShadow: '.5px 0 .5px white',
    borderRadius: '10px',
    padding: '8px',
    fontWeight: 'bold'
  };

  return <span style={dynamicStyle}>N&nbsp;o&nbsp;w P&nbsp;l&nbsp;a&nbsp;y&nbsp;i&nbsp;n&nbsp;g :</span>;
}

function TrackHeader({ text, color }: TrackHeader) {
  const dynamicStyle = {
    textShadow: `1px 1px 1px ${color}`,
    color: `white`,
    fontSize: '1.5rem',
  };

  return <p style={dynamicStyle}><span style={{backgroundColor: `rgb(94, 94, 94, .45)`, borderRadius: '5px'}}>{text}</span></p>;
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
        color: color,
        backgroundColor: 'rgb(106, 106, 106, .55)',

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

export default function AudioPlayer({ album, id }: AudioPlayerProps) {
  const [current, setCurrent] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);
   const isIOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

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
    <>
      <div
        className="audio-page-wrapper"
        style={{display: "flex", flexDirection: "column", alignItems: "center" }}
        
      >
        {/* audio header */}
        {/* <div
          className="audio-header-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "gray",
            width: '30rem'

          }}
        >
          
            <AudioHeader props={album.color} />
         
        </div> */}
        {/* audio player card */}
       
        <div className="audio-card-wrapper" >
          <Card
           
            className="card-body-style rounded-0 border-0 "
            style={{  }}
          >
                <div
          className="audio-header-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "gray",
            width: '100%'

          }}
        >
          
            <AudioHeader props={album.color} />
         
        </div>
            <Card.Body className="test">
              
              <Card.Text
                className="ap-now-playing"
                style={{ textAlign: "center", color: 'white' }}
              >
                <NowPlaying props={album.color}/>
              </Card.Text>
      
              <div style={{ textAlign: "center" }} className="ap-current-track">
                <TrackHeader
                  text={album.tracks[current]?.name}
                  color={album.color}
                />
                </div>
          
              <Card.Text className="ap-audio-error">
                <audio ref={audioRef} controls preload="metadata" src={album.tracks[current]?.url}  >
                  Your browser does not support the audio element.
                </audio>
                <div className="ap-controls-wrapper" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: '15px', marginTop: '15px' }}>
                  <PrevButton
                    color={album.color}
                    onClick={handlePrev}
                    disabled={album.tracks[current].id === 0}
                  />
                  <img
                  id="guit"
                    className="ap-guitar"
                    style={{  }}
                    src={guitar}
                  ></img>
                  <NextButton color={album.color} onClick={handleNext} />
                </div>
                {/* <div
  className="ap-download-now"
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "12px",
  }}
>
  <button
    className="ap-download-btn primary"
    style={{
      borderColor: album.color,
      color: album.color,
    }}
    onClick={() =>
      window.open(`${album.tracks[current].url}?download=1`, "_blank")
    }
  >
    ⬇ Download Track
  </button>
  {isIOS && (
  <div
    style={{
      fontSize: "0.75rem",
      opacity: 0.7,
      textAlign: "center",
      marginTop: "6px",
    }}
  >
    iPhone: Tap Share → Save to Files
  </div>
)}
</div> */}
              </Card.Text>

              <Accordion>
                {album.tracks.map((t, i) => (
                  <ListGroup.Item
                    key={t.id}
                    className="p-0 border-0 ap-list-item"
                    
                  >
                    <Accordion>
                      <Accordion.Item eventKey={String(i)}  style={{ backgroundColor: 'rgb(106, 106, 106, .55)'}}>
                        <div className="ap-track">
                    <div
  className="ap-track-row"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  }}
>
  <span
    onClick={(e) => {
      e.stopPropagation();
      handlePlay(i, e);
    }}
    className="ap-track-span"
    style={{ flex: 1 }}
  >
    {t.name}
  </span>

  {/* <button
    className="ap-track-download"
    style={{
      color: album.colorII,
      border: 'none',
      backgroundColor: 'rgb(148, 133, 242, .45)',
      cursor: 'pointer'
    }}
    onClick={(e) => {
      e.stopPropagation();
      window.open(`${t.url}?download=1`, "_blank");
    }}
    aria-label={`Download ${t.name}`}
  >
    <img width={15} src={download}></img>
  </button> */}
</div>
<div style={{alignItems: 'center', display: 'flex', gap: '10px'}}> <span style={{
        display: "inline-flex",
        alignItems: "center",
        padding: 4,
        cursor: "pointer",
        // color: color,
        backgroundColor: 'rgb(106, 106, 106, .55)',

      }}> <button
    className="ap-track-download"
    style={{
      color: album.colorII,
      border: 'none',
      backgroundColor: `rgb(${album.rgbColor}, .45)`,
      cursor: 'pointer'
    }}
    onClick={(e) => {
      e.stopPropagation();
      window.open(`${t.url}?download=1`, "_blank");
    }}
    aria-label={`Download ${t.name}`}
  >
    <img width={25} height={25} src={download}></img>
  </button></span>
                          <CustomToggle
                            color={album.colorII}
                            eventKey={String(i)}
                          >
                            ▾
                          </CustomToggle>
                          </div>
                        </div>
                        <Accordion.Body>{t.lyrics}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </ListGroup.Item>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
