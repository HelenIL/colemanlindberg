


import { Card } from "react-bootstrap";
import './index.css'
import type { CSSProperties } from "react";
import { albumZones, images } from "../../../assets/assets";




export default function GallerySubpage() {

    const dynamicStyle: CSSProperties = {
    background: `url(${albumZones.background}/galleryBackground.jpeg)`,
    width: "100%",
    backgroundColor: "#494949",
  };

    return (        
    <div style={dynamicStyle}>

      
        <div className="gallery-wrapper">
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
        <Card className="gallery-card-style rounded-0  " style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
               
                    <Card.Img  variant="top" src={`${images.decPractice}/sixteen.jpeg`} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
              
            </Card> 
            <Card className="gallery-card-style rounded-0" style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={`${images.decPractice}/nineteen.jpeg`} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <Card className="gallery-card-style rounded-0 " style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={`${images.decPractice}/twentyone.jpeg`} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            <Card className="gallery-card-style rounded-0" style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={`${images.decPractice}/seven.jpeg`} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <Card className="gallery-card-style rounded-0" style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={`${images.decPractice}/thirteen.jpeg`} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            <Card className="gallery-card-style rounded-0 " style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={`${images.decPractice}/fourteen.jpeg`} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            </div>
        </div>
        
    </div>
    );
}

