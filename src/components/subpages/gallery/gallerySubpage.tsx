import { Card } from "react-bootstrap";
import "./index.css";
import type { CSSProperties } from "react";
import {
  albumZones,
  dec16thBandPractice,
  decShow,
} from "../../../assets/assets";
// import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
// import AccordionContext from "react-bootstrap/AccordionContext";

export default function GallerySubpage() {
  const dynamicStyle: CSSProperties = {
    background: `url(${albumZones.background}/galleryBackgroundOP.jpeg)`,
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    backgroundColor: "#494949",
    fontFamily: "Michroma",
  };

  return (
    <div style={dynamicStyle}>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <h1>
          <span
            style={{
              color: "white",
              textShadow: "1px 1px 1px #2787ce",
              backgroundColor: "rgb(181, 181, 181, 0.35)",
              fontWeight: "bold",
            }}
          >
            Gallery{" "}
          </span>
        </h1>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Card
          className="rounded-0 border-0"
          style={{
            width: "55rem",
            backgroundColor: "rgb(255, 255, 255, 0.45)",
            border: `1px solid #62b5b4`,
            boxShadow: "0 0 0 1px #2787ce",
          }}
        >
          <Accordion>
            <Accordion.Item
              eventKey="0"
              style={{ backgroundColor: "rgb(106, 106, 106, .55)" }}
            >
              <Accordion.Header>
                <Card.Img
                  style={{ width: "150px" }}
                  src={dec16thBandPractice[0].main}
                ></Card.Img>

                <Card.Text style={{ marginLeft: "1rem", fontWeight: "bold" }}>
                  <span style={{ backgroundColor: "rgb(106, 106, 106, .25)" }}>
                    December 2025 Band Practice
                  </span>
                </Card.Text>
              </Accordion.Header>

              {/* <ListGroup.Item  style={{backgroundColor: 'rgb(106, 106, 106, .55)', color: 'white', fontWeight: 'bold', textAlign: 'center'}}> */}

              <Accordion.Body>
                {dec16thBandPractice.map((img, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <img style={{ width: "400px" }} alt="musicians playing guitar and pianao" src={img.img} />
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            {/* </ListGroup.Item> */}
          </Accordion>
        </Card>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Card
          className="rounded-0 border-0"
          style={{
            width: "55rem",
            backgroundColor: "rgb(255, 255, 255, 0.45)",
            border: `1px solid #62b5b4`,
            boxShadow: "0 0 0 1px #2787ce",
          }}
        >
          <Accordion>
            <Accordion.Item
              eventKey="0"
              style={{ backgroundColor: "rgb(106, 106, 106, .55)" }}
            >
              <Accordion.Header>
                <Card.Img
                  style={{ width: "150px" }}
                  src={decShow[0].main}
                ></Card.Img>
                <Card.Text style={{ marginLeft: "1rem", fontWeight: "bold" }}>
                  <span style={{ backgroundColor: "rgb(106, 106, 106, .25)" }}>
                    December 2025 - Show @ Swede Hollow Cafe
                  </span>
                </Card.Text>
              </Accordion.Header>

              {/* <ListGroup.Item  style={{backgroundColor: 'rgb(106, 106, 106, .55)', color: 'white', fontWeight: 'bold', textAlign: 'center'}}> */}

              <Accordion.Body>
                {decShow.map((img, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <img style={{ width: "400px" }} alt="musicians playing for an audience" src={img.img} />
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            {/* </ListGroup.Item> */}
          </Accordion>
        </Card>
      </div>
      {/* <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>
                  
                <Card.Img style={{width: '150px'}} src={`${images.decPractice}/sixteen.jpeg`}></Card.Img>
                </Accordion.Header>  
            <Accordion.Body>
                <p style={{backgroundColor: 'white'}}>Body</p>
            </Accordion.Body>
            </Accordion.Item>
        </Accordion> */}

      {/* <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
       <Card className="rounded-0 border-0" style={{width: '75rem', backgroundColor: 'rgb(255, 255, 255, 0.45)'}}>
        <Card.Title style={{textAlign: 'center', marginTop: '1rem'}}><span style={{color: 'white', textShadow: '1px 1px 1px #2787ce', backgroundColor: 'rgb(181, 181, 181, 0.35)', fontWeight: 'bold'}}>Band practice - 12/16/2025 </span></Card.Title>
        <div className="gallery-wrapper">
           
            <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
        <Card className="gallery-card-style rounded-0  " style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
               
                    <Card.Img  variant="top" src={`${images.decPractice}/sixteen.jpeg`} />
                   
                    
              
            </Card> 
            <Card className="gallery-card-style rounded-0" style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={`${images.decPractice}/nineteen.jpeg`} />
                   
                    
                </Card.Body>
            </Card> 
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <Card className="gallery-card-style rounded-0 " style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={`${images.decPractice}/twentyone.jpeg`} />
                   
                    
                </Card.Body>
            </Card> 
            <Card className="gallery-card-style rounded-0" style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={`${images.decPractice}/seven.jpeg`} />
                  
                    
                </Card.Body>
            </Card> 
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <Card className="gallery-card-style rounded-0" style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={`${images.decPractice}/thirteen.jpeg`} />
                   
                    
                </Card.Body>
            </Card> 
            <Card className="gallery-card-style rounded-0 " style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={`${images.decPractice}/fourteen.jpeg`} />
                   
                    
                </Card.Body>
            </Card> 
            </div>
            
        </div>
        </Card>
        </div> */}
    </div>
  );
}
