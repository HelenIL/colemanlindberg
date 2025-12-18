import cole from '../../assets/cole_grass.jpeg'
import cover from "../../assets/otv_cover.jpg";
import {lyrics} from './extras.js'
import background from '../../assets/bebe_curv.JPG'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;

const album = {
  album: 'Own the View',
  cover: cover,
  background: background,
  color: '#74c932',
  rgbColor: '116, 201, 50',
  colorII: '#74c932',
  fontColor: 'white',
  pic: cole,
  about: 'During the pandemic I had a lot of time on my hands, and I spent much of it digging through old boxes, reading journals I had saved, and rediscovering music and art that I had forgotten. One day I fired up an old, worn-out laptop and discovered a whole collection of songs I had recorded but never released. Most of them featured Henry Bishop on vocals, guitar, and hand drums. Some had been recorded as demos with Chad Dutton in 2011-2012 and had never made it onto an album. A couple were recorded during the Skylines sessions but were not included on that album for one reason or another. I decided to put these songs out under the name The Brotherbears, an homage to my little niece’s name for me. While not a formal, fully realized album, Own The View is a heartfelt collection of songs that commemorate my friendship with Henry and provide a slice of life from parts of my musical journey that may have never seen the light of day had it not been for those long days in quarantine.',
  tracks: [
     {
    name: "Gingerbread Man",
    artist: "The Brotherbears",
    album: 'Own The View',
    url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/owntheview/Gingerbread%20Man.mp3`,
    id: 0,
    image: cover,
    pic: cole,
    background: background,
    lyrics: lyricArray[0].lyrics,
  },
    {
      name: "Sky As Is",
      artist: "The Brotherbears",
      album: 'Own The View',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/owntheview/Sky%20As%20Is.mp3`,
      id: 1,
      image: cover,
      pic: cole,
      background: background,
      lyrics: lyricArray[1].lyrics,
    },
    {
      name: "Fast Food Heaven",
      artist: "The Brotherbears",
      album: 'Own The View',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/owntheview/Fast%20Food%20Heaven.mp3`,
      id: 2,
      image: cover,
      pic: cole,
      background: background,
      lyrics: lyricArray[2].lyrics,
    },
    {
      name: "Faded Star",
      artist: "The Brotherbears",
      album: 'Own The View',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/owntheview/Faded%20Star.mp3`,
      id: 3,
      image: cover,
      pic: cole,
      background: background,
      lyrics: lyricArray[3].lyrics,
    },
    {
      name: "Own The View",
      artist: "The Brotherbears",
      album: 'Own The View',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/owntheview/Own%20The%20View.mp3`,
      id: 4,
      image: cover,
      pic: cole,
      background: background,
      lyrics: lyricArray[4].lyrics,
    },
    {
      name: "Resolutions",
      artist: "The Brotherbears",
      album: 'Own The View',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/owntheview/06Resolutions.mp3`,
      id: 5,
      image: cover,
      pic: cole,
      background: background,
      lyrics: lyricArray[5].lyrics,
    },
    {
      name: "Tired Of Snow",
      artist: "The Brotherbears",
      album: 'Own The View',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/owntheview/Tired%20Of%20Snow.mp3`,
      id: 6,
      image: cover,
      pic: cole,
      background: background,
      lyrics: lyricArray[6].lyrics,
    },
    {
      name: "Gingerbread Man (Painted Whore Remix)",
      artist: "The Brotherbears",
      album: 'Own The View',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/owntheview/Gingerbread%20Man%20%28Painted%20Whore%20Remix%29.mp3`,
      id: 7,
      image: cover,
      pic: cole,
      background: background,
      lyrics: lyricArray[7].lyrics
    },
    { name: "Happy Now", artist: "The Brotherbears", album: 'Own The View', url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/owntheview/Happy%20Now.mp3`, id: 8, image: cover, pic: cole, background: background, lyrics: lyricArray[8].lyrics },
    { name: "Slow News Day", artist: "The Brotherbears", album: 'Own The View', url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/owntheview/Slow%20News%20Day.mp3`, id: 9, image: cover, pic: cole, background: background, lyrics: lyricArray[9].lyrics }
]

}



export default album;