import AudioPlayer from "../../audio/audioPlayer"
import album from '../../../albums/skylines/tracklist'
import AlbumAboutCard from "../../albumAboutCard/albumAboutCard"
import Card from "react-bootstrap/Card";
import './skylines.css'


export default function SkylinesSubpage () {


    return (
        <>
        <div className="outDiv">
        <div style={{ display: "flex", justifyContent: "center", marginTop: '40px' }}>
        <Card className="album-cover">
          <Card.Img src={album.cover} />
        </Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '40px'}}>
        <AudioPlayer album={album} />
        <div>
        <AlbumAboutCard about={album.about} album={album.album} color={album.color}/>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '54px'}}>
          <img src={album.pic} style={{boxShadow: '1px 1px 2px black', height: '200px'}}></img>
        </div>
        
        </div>
      </div>
        </div>
        </>
    )
}