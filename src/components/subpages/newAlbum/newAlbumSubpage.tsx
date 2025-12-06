import Card from "react-bootstrap/Card";
import album from "../../../albums/circus/tracklist";
import { blurbs } from "../../../albums/circus/extras";
import TestAud from "../../audio/audioPlayer";
import TestCar from "../../testComps/testCar";
import TestAbout from "../../testComps/testAbout";
import cole from "../../../assets/cole_grass.jpeg";
import "./test.css";

export default function Test() {
  return (
    <>
      <div className="page-wrapper" style={{ marginBottom: "40px" }}>
        {/* page header */}
        <div
          className="page-header-wrapper"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <p className="page-header-p">
            <span className="page-header-span">
              N e w &nbsp; A l b u m &nbsp; O u t &nbsp; N o w
            </span>
          </p>
        </div>
        {/* album cover */}
        <div
          className="album-cover-wrapper"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card style={{ width: "35rem" }}>
            <Card.Img src={album.cover} />
          </Card>
        </div>
        {/* album about */}
        <div
          className="album-about-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <TestAud album={album} />

          <TestCar blurbs={blurbs} album={album} />
        </div>
        {/* audio player and carousel compoents */}
        <div
          className="components-wrapper"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <TestAbout />
        </div>
      </div>
    </>
  );
}
