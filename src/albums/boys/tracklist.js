import { lyrics, about } from './extras.js'
import { albumZones } from '../../assets/assets.js'


const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;



const album = {
  artist: "Coleman Lindberg",
  album: "Boys",
  cover: `${albumZones.cover}/boysCover.jpg`,
  featured: `${albumZones.featured}/boysFeature.jpeg`,
  background: `${albumZones.background}/boysBackground.png`,
  colorPrimary: '#9284f1',
  rgbColor: '146, 132, 241',
  colorSecondary: '#9284f1',
  fontColor: 'white',
  about: about,
  tracks: [
  { 
    track: "4 Inches Away", 
    url: `${albumZones.audio}/boys/4%20Inches%20Away.mp3`,
    id: 0, 
    lyrics: lyricArray[0].lyrics
  },
  { 
    track: "Happy Now", 
    url: `${albumZones.audio}/boys/Happy%20Now.mp3`, 
    id: 1, 
    lyrics: lyricArray[1].lyrics
  },
  {
    track: "Math", 
    url: `${albumZones.audio}/boys/03math.mp3`, 
    id: 2, 
    lyrics: lyricArray[2].lyrics
  },
  { 
    track: "Slow News Day", 
    url: `${albumZones.audio}/boys/Slow%20News%20Day.mp3`,  
    id: 3, 
    lyrics: lyricArray[3].lyrics
  },
  { 
    track: "Worthy", 
    url: `${albumZones.audio}/boys/05worthy.mp3`, 
    id: 4, 
    lyrics: lyricArray[4].lyrics
  },
  { 
    track: "Where I End", 
    url: `${albumZones.audio}/boys/Where%20I%20End.mp3`, 
    id: 5, 
    lyrics: lyricArray[5].lyrics
  },
  { 
    track: "This Love Song", 
    url: `${albumZones.audio}/boys/This%20Love%20Song.mp3`, 
    id: 6, 
    lyrics: lyricArray[6].lyrics
  },
  { 
    track: "50 Yellow Tulips", 
    url: `${albumZones.audio}/boys/50%20Yellow%20Tulips.mp3`, 
    id: 7, 
    lyrics: lyricArray[7].lyrics
  },
  { 
    track: "4 Weeks", 
    url: `${albumZones.audio}/boys/4%20Weeks.mp3`, 
    id: 8, 
    lyrics: lyricArray[8].lyrics
  },
  { 
    track: "I Dare You", 
    url: `${albumZones.audio}/boys/I%20Dare%20You.mp3`, 
    id: 9, 
    lyrics: lyricArray[9].lyrics
  },
  { 
    track: "Piece Of Sky", 
    url: `${albumZones.audio}/boys/Piece%20of%20Sky.mp3`, 
    id: 10, 
    lyrics: lyricArray[10].lyrics
  },
  { 
    track: "Boys (live 1999)", 
    url: `${albumZones.audio}/boys/12boyslive.mp3`, 
    id: 11, 
    lyrics: lyricArray[11].lyrics
  }
  ]
}

export default album;