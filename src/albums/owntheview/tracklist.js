import {lyrics, about} from './extras.js'


const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;
const audioBlob = 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com'
const backgroundBlob ='https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/backgrounds'
const featuredBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/featured'
const coverBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/covers'

const album = {
  artist: "The Brotherbears",
  album: 'Own the View',
  cover: `${coverBlob}/owntheviewCover.jpg`,
  featured: `${featuredBlob}/owntheviewFeature.jpeg`,
  background: `${backgroundBlob}/owntheviewBackground.JPG`,
  colorPrimary: '#74c932',
  rgbColor: '116, 201, 50',
  colorSecondary: '#74c932',
  fontColor: 'white',
  about: about,
  tracks: [
     {
    track: "Gingerbread Man",
    url: `${audioBlob}/owntheview/Gingerbread%20Man.mp3`,
    downloadURL: `${audioBlob}/owntheview/Gingerbread%20Man.mp3?download=1`,
    id: 0,
    lyrics: lyricArray[0].lyrics,
  },
    {
      track: "Sky As Is",
      url: `${audioBlob}/owntheview/Sky%20As%20Is.mp3`,
      downloadURL: `${audioBlob}/owntheview/Sky%20As%20Is.mp3?download=1`,
      id: 1,
      lyrics: lyricArray[1].lyrics,
    },
    {
      track: "Fast Food Heaven",
      url: `${audioBlob}/owntheview/Fast%20Food%20Heaven.mp3`,
      downloadURL: `${audioBlob}/owntheview/Fast%20Food%20Heaven.mp3?download=1`,
      id: 2,
      lyrics: lyricArray[2].lyrics,
    },
    {
      track: "Faded Star",
      url: `${audioBlob}/owntheview/Faded%20Star.mp3`,
      downloadURL: `${audioBlob}/owntheview/Faded%20Star.mp3?download=1`,
      id: 3,
      lyrics: lyricArray[3].lyrics,
    },
    {
      track: "Own The View",
      url: `${audioBlob}/owntheview/Own%20The%20View.mp3`,
      downloadURL: `${audioBlob}/owntheview/Own%20The%20View.mp3?download=1`,
      id: 4,
      lyrics: lyricArray[4].lyrics,
    },
    {
      track: "Resolutions",
      url: `${audioBlob}/owntheview/06Resolutions.mp3`,
      downloadURL: `${audioBlob}/owntheview/06Resolutions.mp3?download=1`,
      id: 5,
      lyrics: lyricArray[5].lyrics,
    },
    {
      track: "Tired Of Snow",
      url: `${audioBlob}/owntheview/Tired%20Of%20Snow.mp3`,
      downloadURL: `${audioBlob}/owntheview/Tired%20Of%20Snow.mp3?download=1`,
      id: 6,
      lyrics: lyricArray[6].lyrics,
    },
    {
      track: "Gingerbread Man (Painted Whore Remix)",
      url: `${audioBlob}/owntheview/Gingerbread%20Man%20%28Painted%20Whore%20Remix%29.mp3`,
      downloadURL: `${audioBlob}/owntheview/Gingerbread%20Man%20%28Painted%20Whore%20Remix%29.mp3?download=1`,
      id: 7,
      lyrics: lyricArray[7].lyrics
    },
    { track: "Happy Now", url: `${audioBlob}/owntheview/Happy%20Now.mp3`, downloadURL: `${audioBlob}/owntheview/Happy%20Now.mp3?download=1`, id: 8, lyrics: lyricArray[8].lyrics },
    { track: "Slow News Day", url: `${audioBlob}/owntheview/Slow%20News%20Day.mp3`, downloadURL: `${audioBlob}/owntheview/Slow%20News%20Day.mp3?download=1`, id: 9, lyrics: lyricArray[9].lyrics }
]

}



export default album;