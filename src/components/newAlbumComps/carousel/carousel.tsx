import { Button, Card } from "react-bootstrap";
import prev from "../../assets/angles-left-solid-full.svg";
import next from "../../assets/angles-right-solid-full.svg";
import { useRef, useState, useContext, ReactNode } from "react";
import { Album } from "../../subpages/types";
import { isJSDocUnknownTag } from "typescript";
import { CarouselPrevButton, CarouselNextButton } from "../../buttons/buttons";
import './index.css'


type Blurb = {
  track: string;
  blurb?: string;
};

type Blurbs = {
  blurbs: Blurb[];
};

type CarouselProps = {
  blurbs: Blurb[];
  album: Album;
};

type CardHeader = {
  props: string;

};

type BlurbHeader = {
  props: string;
  current?: number;
  track: ReactNode;
};

function CardHeader({ props }: CardHeader) {
  const dynamicStyle = {
    textShadow: `1px 1px 1px ${props}`,
    color: "white",
    fontFamily: "Michroma, sans-serif",
  };

  return <h4 style={dynamicStyle}>ABOUT &nbsp; THE &nbsp; SONGS</h4>;
}

function BlurbHeader({ props, current, track }: BlurbHeader) {
  const dynamicStyle = {
    textShadow: `1px 1px 1px ${props}`,
    color: "white",
    fontFamily: "Michroma, sans-serif",
  };

  return <h4 style={dynamicStyle}>{track}</h4>;
}



export default function Carousel({ blurbs, album }: CarouselProps) {
  const [currentCard, setCurrentCard] = useState(0);

  const blurbArray: Blurb[] = Array.isArray(blurbs)
    ? blurbs.map((b) =>
        typeof b === "string" ? (JSON.parse(b) as Blurb) : (b as Blurb)
      )
    : [];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % blurbs.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + blurbs.length) % blurbs.length);
  };

  return (
    <>
      <div
        className="component-wrapper"
        style={{ padding: "20px", fontFamily: "Michroma, sans-serif" }}
      >
        {/* header starts */}
        {/* <div
          className="header-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "gray",
          }}
        >
          <span className="header-span">
            <h4 className="header-h4">
              <CardHeader
                track={blurbArray[currentCard]?.track}
                props={album.color}
                current={currentCard}
              />
            </h4>
          </span>
        </div> */}
        {/* header ends */}

        {/* carousel starts */}

        <div className="carousel-wrapper" style={{}}>
          <Card
            className="carousel-card-body-style  rounded-0 border-0"
            style={{
     
            }}
          >
             <div
          className="header-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "gray",
          }}
        >
          <span className="header-span">
            <h4 className="header-h4">
              <CardHeader
               
                props={album.color}
                
              />
            </h4>
          </span>
        </div>
            <Card.Title className="">
              {/* carousel header */}
              <div
                className="carousel-header-wrapper"
                style={{
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "center",
                  marginTop: "3rem",
                }}
              >
                {/* previous button */}
                <div
                  className="button-wrapper"
                  style={{ display: "flex", width: "10%", marginLeft: "1rem" }}
                >
                  <div style={{ display: "flex" }}>
                    <CarouselPrevButton
                      color={album.color}
                      onClick={prevCard}
                    />
                  </div>
                </div>
                {/* blurb header */}
                <div
                  className="blurb-header-text-wrapper"
                  style={{
                    paddingTop: "2px",
                    textAlign: "center",
                    width: "80%",
                  }}
                >
                  <BlurbHeader
                    props={album.color}
                    track={blurbArray[currentCard]?.track}
                  />
                </div>
                {/* next button */}
                <div
                  className="button-wrapper"
                  style={{ width: "10%", marginRight: "1rem" }}
                >
                  <CarouselNextButton color={album.color} onClick={nextCard} />
                </div>
              </div>
            </Card.Title>
            {/* blurb text */}
            <Card.Body className="">
              <Card.Text>
                <span
                  className="blurb-span-a"
                  style={{
                    color: "white",
                    backgroundColor: "rgb(106, 106, 106, .55)",
                  }}
                >
                  {blurbArray[currentCard]?.blurb}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

       
      </div>
    </>
  );
}
