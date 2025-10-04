import AudioPlayer from "../audio/audioPlayer"
import tracks from '../../albums/circus/tracklist'





export default function CircusSubPage()  {





    return (


        <div className="outDivCircus">

           <AudioPlayer tracks={tracks}/>
        </div>
    )
}