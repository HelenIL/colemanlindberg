import {lyrics, about} from './extras.js'
import { albumZones } from '../../assets/assets.js'


const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;


const album = {
  artist: "Coleman Lindberg",
  album: "Circus of the Grieving",
  cover: `${albumZones.cover}/circusCover.jpg`,
  background: `${albumZones.background}/circusBackground.png`,
  featured: '',
  colorPrimary: '#2698c7',
  rgbColor: '38, 152, 199',
  colorSecondary: '#2698c7',
  fontColor: 'white',
  about: about,
  tracks: [
    {
    track: "Razor In His Hand",
    url: `${albumZones.audio}/circusofthegrieving/Razor%20In%20His%20Hand.mp3`,
    id: 0,
    lyrics: lyricArray[0].lyrics,
  },
  {
      track: "On Me Now",
      url: `${albumZones.audio}/circusofthegrieving/On%20Me%20Now.mp3`,
      id: 1,
      lyrics: lyricArray[1].lyrics,
    },
    {
      track: "Bottle and a Gun",
      url: `${albumZones.audio}/circusofthegrieving/Bottle%20and%20a%20Gun.mp3`,
      id: 2,
      lyrics: lyricArray[2].lyrics,
    },
    {
      track: "Radiate",
      url: `${albumZones.audio}/circusofthegrieving/Radiate.mp3`,
      id: 3,
      lyrics: lyricArray[3].lyrics,
    },
    {
      track: "Close to Jesus",
      url: `${albumZones.audio}/circusofthegrieving/Close%20To%20Jesus.mp3`,
      id: 4,
      lyrics: lyricArray[4].lyrics,
    },
    {
      track: "Wildflowers",
      url: `${albumZones.audio}/circusofthegrieving/Wildflowers.mp3`,
      id: 5,
      lyrics: lyricArray[5].lyrics,
    },
    {
      track: "I Tried",
      url: `${albumZones.audio}/circusofthegrieving/I%20Tried.mp3`,
      id: 6,
      lyrics: lyricArray[6].lyrics,
    },
    {
      track: "Infinite December",
      url: `${albumZones.audio}/circusofthegrieving/Infinite%20December.mp3`,
      id: 7,
      lyrics: lyricArray[7].lyrics,
    },
    {
      track: "Indiana",
      url: `${albumZones.audio}/circusofthegrieving/Indiana.mp3`,
      id: 8,
      lyrics: lyricArray[8].lyrics,
    },
    {
      track: "Cold Enough",
      url: `${albumZones.audio}/circusofthegrieving/Cold%20Enough.mp3`,
      id: 9,
      lyrics: lyricArray[9].lyrics,
    },
  ]
}




export default album;