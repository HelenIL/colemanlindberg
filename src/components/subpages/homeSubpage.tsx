import Banner from "../banner/banner"
import AudioPlayer from "../audio/audioPlayer"
import tracklist from '../../albums/circus/tracklist'
import NewAlbumSubpage from "./newAlbumSubpage"




export default function HomeSubPage () {

    return (

        <div style={{ marginTop: '50px'}}>
        <Banner />
        <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: "Oxanium Medium, sans-serif"}}>
            <h1 style={{color: 'gray'}}>New Album Out Now</h1>
            <div>
                <NewAlbumSubpage />
                {/* <AudioPlayer tracks={tracklist} /> */}
            </div>
        </div>
        </div>
    )
}