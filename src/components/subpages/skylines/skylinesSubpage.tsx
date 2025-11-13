import AudioPlayer from "../../audio/audioPlayer"
import tracks from '../../../albums/skylines/tracklist'
import './skylines.css'


export default function SkylinesSubpage () {


    return (
        <>
        <div className="outDiv">
        <AudioPlayer tracks={tracks}/>
        </div>
        </>
    )
}