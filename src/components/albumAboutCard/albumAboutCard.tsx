import Card from "react-bootstrap/Card";
import type { CSSProperties } from 'react';
import './about.css'
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
    color: 'gray',
    textTransform: 'uppercase'
  };

  return (
    <h4 style={dynamicStyle}>
     about &nbsp; {album}
    </h4>
  );
}


export default function AlbumAboutCard({about, album, color} : AboutProps) {



    return (
        <div className="ac-outer">
          
          <div style={{ display: 'flex', justifyContent: 'center'}}>
          
           <div className="otv-cont-mobile">

            <div className="ac-header-outer" >
                <span className="ac-header-span" ><AboutHeader color={color} album={album}/></span>
              </div>

            <div>
            <div className="about-container ac-card-outer">
              <Card className="about-card ac-card-style rounded-0 border-0 opacity-75">
                <Card.Body>
                  <Card.Text>
                    {about}
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* <div
                className="about-card rounded-0 border-0 opacity-75"
                style={{ backgroundColor: "#e3e3e3" }}
              >
                <div style={{ textAlign: "center" }}>
                 
                  <p className="about-text">
                    <span className="about-span">
                    {about}
                    </span>
                  </p>
                </div>
              </div> */}
              </div>
          </div>
          </div>
          </div>
        </div>
    )
}