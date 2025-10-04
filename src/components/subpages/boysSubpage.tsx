import tracks from '../../albums/boys/tracklist'
import AudioPlayer from '../audio/audioPlayer'


export default function BoysSubpage ()  {


    return (
        <div className="outDivBoys">
            <div className="inDiv">
        <AudioPlayer tracks={tracks}/>
        </div>
        </div>
    )

}