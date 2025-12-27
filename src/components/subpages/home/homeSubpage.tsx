import NewAlbumSubpage from "../newAlbum/newAlbumSubpage";
import type { CSSProperties } from "react";
import { albumZones } from "../../../assets/assets";

import "./home.css";

export default function HomeSubPage() {

      const dynamicStyle: CSSProperties = {
    background: `url(${albumZones.background}/homeBackground.jpeg)`,
    width: "100%",
    backgroundColor: "#494949",
  };
  return (
    <div style={dynamicStyle}>
      <div className="hp-header">
        <p>
          <span className="hp-header-span">
            C&nbsp; O&nbsp; L&nbsp; E&nbsp; M &nbsp;A &nbsp;N &nbsp;&nbsp; L
            &nbsp;I &nbsp;N &nbsp;D&nbsp; B &nbsp;E &nbsp;R&nbsp; G{" "}
          </span>
        </p>
      </div>
       <div
          className="page-header-wrapper"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <p className="sub-header-p" style={{}}>
            <span className="sub-header-span" style={{}}>
              N e w &nbsp; A l b u m &nbsp; O u t &nbsp; N o w
            </span>
          </p>
        </div>
      <div>
        <div className="hp-outer-comp">
          <NewAlbumSubpage />
    \
        </div>
      </div>
    </div>
  );
}


