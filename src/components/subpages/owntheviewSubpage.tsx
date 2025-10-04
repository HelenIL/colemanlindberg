import AudioPlayer from "../audio/audioPlayer"
import tracks from '../../albums/owntheview/tracklist'


export default function OwnTheViewSubpage () {

    return (
        <>
        <div className="outDivOTV">
        <AudioPlayer tracks={tracks}/>
        </div>
        </>
    )
}