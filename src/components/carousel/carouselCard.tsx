import { Button } from "react-bootstrap"
import { useRef, useState, useContext } from "react";
import prev from "../../assets/angles-left-solid-full.svg";
import next from "../../assets/angles-right-solid-full.svg";
import './carousel.css'

type Blurb = { 
  track: string; 
  blurb?: string 
};

type Blurbs = {
  blurbs: Blurb[]
}






export default function CarouselCard({blurbs} : Blurbs) {
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
        
        <div className="cc-page-outer" style={{}}>
          <div className="cc-header-outer" >
           <span className="cc-header-span"> <h4 className="cc-header-h4" >ABOUT &nbsp; THE &nbsp; SONGS</h4></span>
          </div>
          
            <div className="carousel-container ">
              <div
                className="carousel-card rounded-0 border-0 opacity-75"
                style={{ backgroundColor: "#e3e3e3" }}
              >
                <div style={{  }}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="left-button" style={{}}>
                  <Button
                    variant="light"
                    className="card-button rounded-0"
                    onClick={prevCard}
                  >
                    <img src={prev} alt="Previous" width="40" height="20" />
                  </Button>
                </div>
                    <div>
                  <p className="blurb-header">{blurbArray[currentCard]?.track}</p>
                  </div>
                  <div className="right-button">
                  <Button
                    // variant="light"
                    // id="cc-btn"
                    className="card-button rounded-0"
                    onClick={nextCard}
                  >
                    <img className="card-icon"src={next} alt="Next" width="30" height="20" />
                  </Button>
                </div>
                  </div>
                  <p className="blurb-text">
                    <span className="blurb-span">
                      {blurbArray[currentCard]?.blurb}
                    </span>
                  </p>
                </div>
              </div>

              {/* <div className="carousel-buttons">
                <div>
                  <Button
                    variant="light"
                    className="card-button"
                    onClick={prevCard}
                  >
                    <img src={prev} alt="Previous" width="40" height="20" />
                  </Button>
                </div>
                <div className="carousel-indicators">
                  {blurbs.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === currentCard ? "active" : ""}`}
                    ></span>
                  ))}
                </div>
                <div>
                  <Button
                    variant="light"
                    className="card-button"
                    onClick={nextCard}
                  >
                    <img src={next} alt="Next" width="30" height="20" />
                  </Button>
                </div>
              </div> */}
            </div>
       </div>
    )
}