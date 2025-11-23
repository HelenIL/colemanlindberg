import { useRef, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import album from "../../../albums/circus/tracklist";
import { blurbs } from "../../../albums/circus/extras";


import AudioPlayer from "../../audio/audioPlayer";
import CarouselCard from "../../carousel/carouselCard";
import "./newAlbum.css";


export default function NewAlbumSubpage() {
  const [current, setCurrent] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  

  return (
    <div className="na-outer">
      {/* header */}
      <div className="na-header-outer">
        <p className="na-header">

          <span className="na-header-span">N e w &nbsp; A l b u m &nbsp; O u t &nbsp; N o w</span>
        </p>
      </div>
      {/* album cover */}
      <div className="na-cover-outer">
        <Card className="na-cover rounded-0">
          <Card.Img src={album.cover} />
        </Card>
      </div>
      {/* album about */}
      <div className="na-about-outer" >
        
        <Card className="na-about border-0 opacity-75 rounded-0">
          <Card.Text className="na-about-text">
            <span className="na-about-span">{album.about}</span>
            
          </Card.Text>
        </Card>
      </div>
      {/* new album pass components */}
      <div className="na-comp-outer" >
        <div >
   
      <AudioPlayer album={album}/>
      </div>
     <div>
      <CarouselCard blurbs={blurbs}/>
     </div>

      </div>
     </div>

  );
}
