import Card from "react-bootstrap/Card";
import type { CSSProperties } from "react";
import './index.css'





type AboutProps = {
  about: string;
  album: string;
  color: string;
  pic: string;
};

type HeaderProps = {
  color: string;

  
};

function AboutHeader({ color }: HeaderProps) {
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
              <AboutHeader color={color}  />
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
