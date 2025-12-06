import AudioPlayer from "../../audio/audioPlayer";
import album from "../../../albums/circus/tracklist";
import "./circus.css";

export default function CircusSubPage() {
  return (
    <div className="outDivCircus">
      <AudioPlayer album={album} />
    </div>
  );
}
