import album from "../../../albums/boys/tracklist";
import AudioPlayer from "../../audio/audioPlayer";
import AlbumAboutCard from "../../albumAboutCard/albumAboutCard";
import Card from "react-bootstrap/Card";
import './boys.css'

export default function BoysSubpage() {
  return (
    <div className="boys-outer">
      <div className="boys-cover-outer" >
        <Card className="boys-cover">
          <Card.Img src={album.cover} />
        </Card>
      </div>
      <div className="boys-comp-outer">
        <AudioPlayer album={album} />
        <div>
        <AlbumAboutCard about={album.about} album={album.album} color={album.color}/>
        {/* <div className="boys-img-outer" >
          <img className="boys-img" src={album.pic} ></img>
        </div> */}
        
        </div>
      </div>
    </div>
  );
}
