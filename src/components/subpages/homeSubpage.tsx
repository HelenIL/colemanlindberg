import Banner from "../banner/banner"
import AudioPlayer from "../audio/audioPlayer"
import tracklist from '../../albums/circus/tracklist'
import NewAlbumSubpage from "./newAlbumSubpage"
import './home.css'



export default function HomeSubPage () {

    return (

        <div className="out-div" style={{}}>
            <div className="page-header" >
                <p>C&nbsp; O&nbsp; L&nbsp; E&nbsp; M &nbsp;A &nbsp;N &nbsp;&nbsp; L &nbsp;I &nbsp;N &nbsp;D&nbsp; B &nbsp;E &nbsp;R&nbsp; G</p>
                </div>
            
        {/* <Banner /> */}
        <div >
            {/* <h1 className="album-header" style={{color: 'white'}}>New Album Out Now</h1> */}
            <div>
                <NewAlbumSubpage />
                {/* <AudioPlayer tracks={tracklist} /> */}
            </div>
        </div>
        </div>
    )
}