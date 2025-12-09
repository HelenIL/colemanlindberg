import album from "../../albums/makingmyname/tracklist";
import AlbumSubPage from "../../components/subpages/albumSubPage";
import AudioPlayer from "../../components/audio/audioPlayer";
import AlbumAboutCard from "../../components/albumAbout/albumAboutCard";

export default function MakingMyName() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <AlbumSubPage
        album={album}
        background={album.background}
        AudioPlayer={AudioPlayer}
        AlbumAboutCard={AlbumAboutCard}
      />
    </div>
  );
}
