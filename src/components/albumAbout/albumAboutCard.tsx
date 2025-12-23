import Card from "react-bootstrap/Card";
import type { CSSProperties } from "react";
import './index.css'


type About = {
  about: string;
};
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
// type Album = {
//   album: string;
//   cover: string;
//   color: string;
//   pic: string;
//   blurbs?: string;
//   about?: string;
//   tracks?: Track[];
// };

type AboutProps = {
  about: string;
  album: string;
  color: string;
  pic: string;
};

type AboutHeader = {
  color: string;
  album: string;
  
};

function AboutHeader({ color, album }: AboutHeader) {
  const dynamicStyle: CSSProperties = {
    textShadow: `1px 1px 1px ${color}`,
    color: "white",
    backgroundColor: "gray",
  };

  return <h4 style={dynamicStyle}>ABOUT THE ALBUM</h4>;
}

export default function AlbumAboutCard({ about, album, color, pic }: AboutProps) {

  return (
    <div
      className="ac-outer"
      // style={{border: '2px solid green'}}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="otv-cont-mobile " >
          {/* card header */}
          <div
            className="ac-header-outer"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "gray",
            }}
          >
            <span className="" style={{}}>
              <AboutHeader color={color} album={album} />
            </span>
          </div>
            {/* about card */}
          <div className="" style={{  height: "100%", }}>
            <div className="about-container ac-card-outer">
              <Card
                className="ac-card-style rounded-0 border-0 "
                style={{
                 
                }}
              >
                <Card.Body>
                  <Card.Text>
                    <span
                      style={{
                        color: "white",
                        backgroundColor: "rgb(106, 106, 106, .55)",
                      }}
                    >
                      {about}
                    </span>
                    {/* {about} */}
                  </Card.Text>
                  
                </Card.Body>
                <Card.Img style={{padding: '10px'}} variant="bottom" src={pic}/>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
