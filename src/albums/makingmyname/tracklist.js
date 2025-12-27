import { lyrics, about } from './extras.js'
import { albumZones } from '../../assets/assets.js'


const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;

    
const album = {
    artist: "Coleman Lindberg",
    album: 'Making My Name',
    cover: `${albumZones.cover}/makingmynameCover.jpg`,
    downloadURL: `${albumZones.audio}/makingmyname/`,
    background: `${albumZones.background}/makingmynameBackground.jpeg`,
    colorPrimary: '#dca58f',
    rgbColor: '220, 165, 143',
    colorSecondary: '#dea88e',
    fontColor: 'white',
    featured: `${albumZones.featured}/makingmynameFeature.jpg`,
    about: about,
    tracks: [
        {
            track: "Wounded Winter",
            url: `${albumZones.audio}/makingmyname/Wounded%20Winter.mp3`,
            filename: 'Wounded%20Winter.mp3',
            id: 0,
            lyrics: lyricArray[0].lyrics,
        },
               {
            track: "Crawling Home",
            url: `${albumZones.audio}/making-my-name/Crawling%20Home.mp3`,
            id: 1,
            lyrics: lyricArray[1].lyrics,
        },
               {
            track: "Closer on the Corners",
            url: `${albumZones.audio}/makingmyname/Closer%20on%20the%20Corners.mp3`,
            id: 2,
            lyrics: lyricArray[2].lyrics,
        },
               {
            track: "Hard Times, Come Again No More",
            url: `${albumZones.audio}/makingmyname/Hard%20Times%2C%20Come%20Again%20No%20More.mp3`,
            id: 3,
            lyrics: lyricArray[3].lyrics,
        },
               {
            track: "Sky So Blue",
            url: `${albumZones.audio}/makingmyname/Sky%20So%20Blue.mp3`,
            id: 4,
            lyrics: lyricArray[4].lyrics,
        },
               {
            track: "Making My Name",
            url: `${albumZones.audio}/makingmyname/Making%20My%20Name.mp3`,
            id: 5,
            lyrics: lyricArray[5].lyrics,
        },
               {
            track: "J-Train",
            url: `${albumZones.audio}/makingmyname/J-Train.mp3`,
            id: 6,
            lyrics: lyricArray[6].lyrics,
        },
    ]
}


export default album;