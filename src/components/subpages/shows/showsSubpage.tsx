
import Card from "react-bootstrap/Card";
import type { CSSProperties } from "react";
import { albumZones } from "../../../assets/assets";
import './index.css'


export default function ShowsSubPage() {

       const dynamicStyle: CSSProperties = {
    background: `url(${albumZones.background}/showsBackground.jpg)`,
    width: "100%",
    height: "100vh",
    backgroundColor: "#494949",
  };


    return (
        <div style={dynamicStyle}>
        <div className="shows-header-wrapper">
        <p><span className="shows-header-span">Upcoming Shows</span></p>
        </div>
        <div className="shows-card-wrapper">
        <Card className="shows-card" >
           
      <Card.Body>
        <Card.Title><span className="shows-header-span">No Upcoming Shows</span></Card.Title>
        <Card.Subtitle className="mb-2">Check back soon!</Card.Subtitle>
    
   
      </Card.Body>
    </Card>
        </div>
        
        </div>
    )
}

