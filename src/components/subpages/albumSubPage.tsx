import Card from "react-bootstrap/Card";
import type { CSSProperties } from "react";
import { Album } from "./types";
// import AudioPlayer from "../audio/audioPlayer";
// import AlbumAboutCard from "../albumAboutCard/albumAboutCard";
import "./subpage.css";

type ContainerProps = {
  background: string;
  album: Album;
  AudioPlayer: React.ElementType;
  AlbumAboutCard: React.ElementType;
};

const AlbumSubPage: React.FC<ContainerProps> = ({
  album,
  background,
  AudioPlayer,
  AlbumAboutCard,
}) => {
  const dynamicStyle: CSSProperties = {
    background: `url(${background})`,
    width: "100%",
    backgroundColor: "#494949",
  };
console.log(album)
  return (
    <div style={dynamicStyle}>
      <div className="sub-cover-outer">
        <Card className="sub-cover">
          <Card.Img className="cover" src={album.cover} />
        </Card>
      </div>
      <div className="sub-comp-outer d-flex align-items-stretch" style={{gap: '10px'}}>
        {/* Audio Player here */}
        <div className="mobile-div" >
        <AudioPlayer album={album} />
        </div>
        <div className="mobile-div" >
          {/* About Card here */}
          <AlbumAboutCard
            about={album.about}
            album={album.album}
            color={album.color}
            pic={album.pic}
          />
        </div>
      </div>
    </div>
  );
};

// export default function TestSub({album, background}: ContainerProps) {

// return (

//     <>
//         <PageContainer />
//     </>
// )

// }

export default AlbumSubPage;
