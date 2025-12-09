import Card from "react-bootstrap/Card";
import quoteStart from '../../../assets/quotation-mark-white-icon.png'
import quoteEnd from '../../../assets/quotation-mark-right-white-icon.png'
import './index.css'
// import './testcomp.css'

function MobileHeader() {
  const dynamicStyle = {
    textShadow: `1px 1px 1px #2698c7`,
    color: "white",
    fontFamily: "Michroma, sans-serif",


  };

  return <h4 style={dynamicStyle}>ABOUT &nbsp; THE &nbsp; ALBUM</h4>;
}

export default function NewAlbumAbout() {
  return (
    <div style={{}}>
              <div className="mobile-divide">
          <span>
          <MobileHeader />
          </span>
        </div>
      <Card
        className="na-about border-0 rounded-0"
        style={{ backgroundColor: "rgb(255, 255, 255, .45)" }}
      >
        {/* <Card.Text className="na-about-text">
            <span className="na-about-span">{album.about}</span>
            
          </Card.Text> */}
        <Card.Text>
            <span className="na-about-span">
           <img style={{height: '20px'}} src={quoteStart}></img>
           </span>
          <span>
            {" "}
            <span className="na-about-span">
            This is the album I’ve always wanted to make, and making it was a
            lifeline for me.</span><span className="na-about-span">These songs span 25 years of my life and were
            created out of love, loss, grief, addiction, recovery, and survival.</span><span className="na-about-span">
            I’ve sung them in dark bars and coffee shops, in churches and at
            funerals, on street corners and bedrooms lit by Christmas lights and
            candles, and in more than a few treatment centers.</span><span className="na-about-span">They’ve been like
            prayers to me.</span><span className="na-about-span">They have stood the test of time and been truly lived
            in.</span>
          </span>
        </Card.Text>
        <Card.Text>
          <span className="na-about-span">
            Recording and producing this album with my dear friend{" "}</span><span className="na-about-span">
            <span
              style={{ fontWeight: 'bold' }}
            >
              Chad Dutton
            </span>{" "}</span><span className="na-about-span">
            was one of the most rewarding experiences of my life. </span> <span className="na-about-span">It took two
            years of on-and-off effort, and I am so proud of how beautifully it
            turned out. </span> <span className="na-about-span"> I was honored to have my musical soulmate{" "}</span><span className="na-about-span">
            <span
              style={{ fontWeight: 'bold' }}
            >
              Henry Bishop
            </span>{" "}</span><span className="na-about-span">
            in the studio to sing harmonies on three of the tracks as well.</span><span className="na-about-span"> I
            hope these songs will move you, make you want to dance, and get
            stuck in your head the way they have been in mine all these years.</span><span className="na-about-span">
            This is my love letter to Gen X, and my tribute to the alternative
            and pop music of the 80s and 90s that inspired me to want to be a
            songwriter.
          </span>
        </Card.Text>
        <Card.Text>
          <span className="na-about-span">
            I was influenced by artists like Tori Amos, Tracy Chapman, Peter
            Gabriel, Ani Difranco, Tom Petty, Depeche Mode, The Indigo Girls,
            Shawn Colvin, and The Smiths.</span> <span className="na-about-span"> These artists have created a safety
            and sanctuary in my life, and I hope this album does the same for
            you in some way.</span><span className="na-about-span"> These songs belong to all of us now.
          </span>
        </Card.Text>
        <Card.Text>
            <span className="na-about-span">Enjoy.</span>
            <span className="na-about-span">
            <img style={{height: '20px'}} src={quoteEnd}></img>
            </span>
        </Card.Text>
      </Card>
    </div>
  );
}
