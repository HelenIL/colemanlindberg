import AudioPlayer from "../audio/audioPlayer"
import tracks from '../../albums/owntheview/tracklist'


export default function OwnTheViewSubpage () {

    return (
        <>
        <div>Own The View Subpage</div>
        <AudioPlayer tracks={tracks}/>
        </>
    )
}