import album from "../../albums/skylines/tracklist"
import AlbumSubPage from "../../components/subpages/albumSubPage";
import AudioPlayer from "../../components/audio/audioPlayer";
import AlbumAboutCard from "../../components/albumAboutCard/albumAboutCard";

export default function Skylines() {

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>

   
         <AlbumSubPage
        album={album}
        background={album.background}
        AudioPlayer={AudioPlayer}
        AlbumAboutCard={AlbumAboutCard}
      />
        </div>
       
       
    )
}