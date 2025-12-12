import album from "../../albums/boys/tracklist";
import AlbumSubPage from "../../components/subpages/albumSubPage";
import AudioPlayer from "../../components/audio/audioPlayer";
import AlbumAboutCard from "../../components/albumAbout/albumAboutCard";

export default function Boys() {
  console.log(album)
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* <BoysSubpage /> */}
      <AlbumSubPage
        album={album}
        background={album.background}
        AudioPlayer={AudioPlayer}
        AlbumAboutCard={AlbumAboutCard}
      />
    </div>
  );
}
