import {lyrics, about} from './extras.js'
import { albumZones } from '../../assets/assets.js'


const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;

const album = {
  artist: "Coleman Lindberg",
  album: 'Skylines',
  cover: `${albumZones.cover}/skylinesCover.jpg`,
  background: `${albumZones.background}/skylinesBackground.jpg`,
  featured: `${albumZones.featured}/skylinesFeature.jpeg`,
  colorPrimary: '#f8f5a7',
  rgbColor: '248, 245, 167',
  colorSecondary: '#f8f5a7',
  fontColor: 'black',
  about: about,
  tracks: [
    {
    track: "First Avenue",
    url: `${albumZones.audio}/skylines/First%20Avenue.mp3`,
    id: 0,
    lyrics: lyricArray[0].lyrics,
  },
    {
      track: "Lake Street",
      url: `${albumZones.audio}/skylines/Lake%20Street.mp3`,
      id: 1,
      lyrics: lyricArray[1].lyrics,
    },
    {
      track: "Skyline",
      url: `${albumZones.audio}/skylines/03Skyline.mp3`,
      id: 2,
      lyrics: lyricArray[2].lyrics,
    },
    {
      track: "Cold as Snow",
      url: `${albumZones.audio}/skylines/Cold%20As%20Snow.mp3`,
      id: 3,
      lyrics: lyricArray[3].lyrics,
    },
    {
      track: "Good Times",
      url: `${albumZones.audio}/skylines/Good%20Times.mp3`,
      id: 4,
      lyrics: lyricArray[4].lyrics,
    },
    {
      track: "Spring Cocaine",
      url: `${albumZones.audio}/skylines/Spring%20Cocaine.mp3`,
      id: 5,
      lyrics: lyricArray[5].lyrics,
    },
    {
      track: "The Weight of Not Forgetting You",
      url: `${albumZones.audio}/skylines/The%20Weight%20Of%20Not%20Forgetting%20You.mp3`,
      id: 6,
      lyrics: lyricArray[6].lyrics,
    },
    {
      track: "Story of Us",
      url: `${albumZones.audio}/skylines/Story%20Of%20Us.mp3`,
      id: 7,
      lyrics: lyricArray[7].lyrics,
    },
    { 
      track: "Skyline Heaven", 
      url: `${albumZones.audio}/skylines/Skyline%20Heaven.mp3`, 
      id: 8, 
      lyrics: lyricArray[8].lyrics,
    }
  ]
}


export default album;