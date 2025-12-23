import album from "../../albums/afewthings/tracklist"
import AlbumSubPage from "../../components/subpages/albumSubPage";
import AudioPlayer from "../../components/audio/audioPlayer";
import AlbumAboutCard from "../../components/albumAbout/albumAboutCard";



export default function AFewThings() {



    return (

        <div style={{ display: "flex", alignItems: "center" }}>
            <AlbumSubPage
        album={album}
        background={album.background}
        AudioPlayer={AudioPlayer}
        AlbumAboutCard={AlbumAboutCard}
      />
        </div>
    )
    
    
   
}