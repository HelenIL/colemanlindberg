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
          <div className="cc-mobile-360">
          <div className="cc-mobile-test">
            {/* header */}
            <div className="cc-header-mobile" >
             <div className="cc-header-outer" >
             <span className="cc-header-span"> <h4 className="cc-header-h4" >ABOUT &nbsp; THE &nbsp; SONGS</h4></span>
              </div>
           </div>
           {/* carousel */}
            <div className="cc-card-mobile">
              <div  className="carousel-container">
                <div className="carousel-card rounded-0 border-0 opacity-75">
                  <div className="cc-btns">
                    <div className="left-button">
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

                    className="card-button rounded-0"
                    onClick={nextCard}
                  >
                    <img className="card-icon"src={next} alt="Next" width="30" height="20" />
                  </Button>
                </div>
                  </div>
                  <p className="blurb-text" style={{fontSize: '14px'}}>
                    <span className="blurb-span">
                      {blurbArray[currentCard]?.blurb}
                    </span>
                  </p>
                </div>
              </div>

             
            </div>
            </div>
            </div>
       </div>
    )
}