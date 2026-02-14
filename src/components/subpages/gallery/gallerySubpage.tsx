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
          className="gallery-card-style rounded-0 border-0"
       
        >
          <Accordion>
            <Accordion.Item
              eventKey="0"
              style={{ backgroundColor: "rgb(106, 106, 106, .55)" }}
            >
              <Accordion.Header>
                <Card.Img
                 
                  className="gallery-header-img"
                  src={dec16thBandPractice[0].main}
                ></Card.Img>

                <Card.Text style={{ marginLeft: "1rem", fontWeight: "bold" }}>
                  <span className="gallery-header-span" >
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
                    <img style={{ width: "400px" }} alt=''  src={img.img} />
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
          className="gallery-card-style rounded-0 border-0"
          
        >
          <Accordion>
            <Accordion.Item
              eventKey="0"
              style={{ backgroundColor: "rgb(106, 106, 106, .55)" }}
            >
              <Accordion.Header>
                <Card.Img
                   className="gallery-header-img"
                 
                  src={decShow[0].main}
                ></Card.Img>
                <Card.Text style={{ marginLeft: "1rem", fontWeight: "bold" }}>
                  <span className="gallery-header-span" >
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
                    <img style={{ width: "400px" }} alt='' src={img.img} />
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            {/* </ListGroup.Item> */}
          </Accordion>
        </Card>
      </div>
      
    </div>
  );
}
