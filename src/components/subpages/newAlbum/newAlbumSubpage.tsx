import Card from "react-bootstrap/Card";
import album from "../../../albums/circus/tracklist";
import { blurbs } from "../../../albums/circus/extras";
import AudioPlayer from "../../audio/audioPlayer";
import TestCar from "../../newAlbumComps/carousel/carousel";
import TestAbout from "../../newAlbumComps/about/newAlbumAbout";
import cole from "../../../assets/cole_grass.jpeg";
import "./index.css";
import TipJar from "../../tipJar/tipJar";

export default function Test() {
  return (
    <>
      <div className="page-wrapper" style={{ marginBottom: "40px" }}>
        {/* album cover */}
        <div
          className="album-cover-wrapper"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card className="album-cover">
            <Card.Img src={album.cover} />
          </Card>
        </div>

        <div className="">
          {/* audio player and carousel compoents */}
          <div
            className="components-wrapper"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <div className="mobile-wrapper">
              <AudioPlayer album={album} />
            </div>
            <div className="mobile-wrapper">
              <TestCar blurbs={blurbs} album={album} />
            </div>
          </div>
          {/* album about */}
          <div
            className="album-about-wrapper"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TestAbout />
          </div>

        </div>
      </div>
    </>
  );
}
