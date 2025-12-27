import {lyrics, about} from './extras.js'
import { albumZones } from '../../assets/assets.js'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;


const album = {
  artist: "The Brotherbears",
  album: 'Own the View',
  cover: `${albumZones.cover}/owntheviewCover.jpg`,
  featured: `${albumZones.featured}/owntheviewFeature.jpeg`,
  background: `${albumZones.background}/owntheviewBackground.JPG`,
  colorPrimary: '#74c932',
  rgbColor: '116, 201, 50',
  colorSecondary: '#74c932',
  fontColor: 'white',
  about: about,
  tracks: [
     {
    track: "Gingerbread Man",
    url: `${albumZones.audio}/owntheview/Gingerbread%20Man.mp3`,
    id: 0,
    lyrics: lyricArray[0].lyrics,
  },
    {
      track: "Sky As Is",
      url: `${albumZones.audio}/owntheview/Sky%20As%20Is.mp3`,
      id: 1,
      lyrics: lyricArray[1].lyrics,
    },
    {
      track: "Fast Food Heaven",
      url: `${albumZones.audio}/owntheview/Fast%20Food%20Heaven.mp3`,
      id: 2,
      lyrics: lyricArray[2].lyrics,
    },
    {
      track: "Faded Star",
      url: `${albumZones.audio}/owntheview/Faded%20Star.mp3`,
      id: 3,
      lyrics: lyricArray[3].lyrics,
    },
    {
      track: "Own The View",
      url: `${albumZones.audio}/owntheview/Own%20The%20View.mp3`,
      id: 4,
      lyrics: lyricArray[4].lyrics,
    },
    {
      track: "Resolutions",
      url: `${albumZones.audio}/owntheview/06Resolutions.mp3`,
      id: 5,
      lyrics: lyricArray[5].lyrics,
    },
    {
      track: "Tired Of Snow",
      url: `${albumZones.audio}/owntheview/Tired%20Of%20Snow.mp3`,
      id: 6,
      lyrics: lyricArray[6].lyrics,
    },
    {
      track: "Gingerbread Man (Painted Whore Remix)",
      url: `${albumZones.audio}/owntheview/Gingerbread%20Man%20%28Painted%20Whore%20Remix%29.mp3`,
      id: 7,
      lyrics: lyricArray[7].lyrics
    },
    { track: "Happy Now", url: `${albumZones.audio}/owntheview/Happy%20Now.mp3`, id: 8, lyrics: lyricArray[8].lyrics },
    { track: "Slow News Day", url: `${albumZones.audio}/owntheview/Slow%20News%20Day.mp3`, id: 9, lyrics: lyricArray[9].lyrics }
]

}



export default album;