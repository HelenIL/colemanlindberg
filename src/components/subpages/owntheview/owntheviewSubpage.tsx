import AudioPlayer from "../../audio/audioPlayer";
import album from "../../../albums/owntheview/tracklist";
import AlbumAboutCard from "../../albumAboutCard/albumAboutCard";
import Card from "react-bootstrap/Card";
import './owntheview.css'

export default function OwnTheViewSubpage() {
  return (
    <>
      <div className="outDivOTV">
        <div style={{ display: "flex", justifyContent: "center", marginTop: '40px' }}>
        <Card className="otv-cover">
          <Card.Img src={album.cover} />
        </Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center',  marginTop: '40px', marginBottom: '40px'}}>
        <AudioPlayer album={album} />
        <div>
        <AlbumAboutCard about={album.about} album={album.album} color={album.color}/>
        <div style={{ width: '25rem', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={album.pic} style={{boxShadow: '1px 1px 2px black'}}></img>
        </div>
        
        </div>
      </div>
      </div>
    </>
  );
}
