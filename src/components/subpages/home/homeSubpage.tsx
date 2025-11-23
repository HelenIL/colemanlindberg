import Banner from "../../banner/banner";

import tracklist from "../../../albums/circus/tracklist";
import NewAlbumSubpage from "./../newAlbum/newAlbumSubpage";
import AudioPlayer from "../../audio/audioPlayer";
import album from '../../../albums/circus/tracklist'
import "./home.css";

export default function HomeSubPage() {
  return (
    <div className="hp-outer" style={{}}>
      <div className="hp-header">
        <p>
          <span className="hp-header-span">
          C&nbsp; O&nbsp; L&nbsp; E&nbsp; M &nbsp;A &nbsp;N &nbsp;&nbsp; L
          &nbsp;I &nbsp;N &nbsp;D&nbsp; B &nbsp;E &nbsp;R&nbsp; G </span>
        </p>
      </div>

    
      <div>
       
        <div className="hp-outer-comp">
          <NewAlbumSubpage />

        </div>
      </div>
    </div>
  );
}
