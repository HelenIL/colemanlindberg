import tracks from '../../albums/boys/tracklist'
import AudioPlayer from '../audio/audioPlayer'


export default function BoysSubpage ()  {


    return (
        <div>Boys
        <AudioPlayer tracks={tracks}/>
        </div>
    )

}