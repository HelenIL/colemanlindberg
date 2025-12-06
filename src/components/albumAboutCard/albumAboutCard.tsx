import Card from "react-bootstrap/Card";
import type { CSSProperties } from 'react';
// import './about.css'
type About = {
    about: string;
}
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
  tracks?: Track[]
}

type AboutProps = {
  about: string;
  album: string;
  color: string;
}

type AboutHeader = {
  color: string;
  album: string;

}


function AboutHeader({color, album}: AboutHeader) {
  const dynamicStyle: CSSProperties = {
    textShadow: `1px 1px 1px ${color}`,
    color: 'white',
    backgroundColor: 'gray'

  };

  return (
    <h4 style={dynamicStyle}>
     ABOUT THE ALBUM
    </h4>
  );
}


export default function AlbumAboutCard({about, album, color} : AboutProps) {



    return (
        <div className="ac-outer" style={{ padding: "20px", fontFamily: "Michroma, sans-serif" }}>
          
          <div style={{ display: 'flex', justifyContent: 'center'}}>
          
           <div className="otv-cont-mobile">

            <div className="ac-header-outer" style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "gray",
          }}>
                <span className="" style={{}}><AboutHeader color={color} album={album}/></span>
              </div>

            <div>
            <div className="about-container ac-card-outer">
              <Card className="about-card-a ac-card-styl-ae rounded-0 border-0 "style={{
              width: "30rem",
              height: "49.5rem",
              backgroundColor: "rgb(255, 255, 255, .45)",
            }}>
                <Card.Body>
                  <Card.Text>
                    <span style={{
                    color: "white",
                    backgroundColor: "rgb(106, 106, 106, .55)",
                  }}>
                      {about}
                    </span>
                    {/* {about} */}
                  </Card.Text>
                </Card.Body>
              </Card>
             
              </div>
          </div>
          </div>
          </div>
        </div>
    )
}