import {lyrics, about} from './extras.js'


const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;
const audioBlob = 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com'
const backgroundBlob ='https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/backgrounds'
const featuredBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/featured'
const coverBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/covers'

const album = {
  artist: "Coleman Lindberg",
  album: "Circus of the Grieving",
  cover: `${coverBlob}/circusCover.jpg`,
  background: `${backgroundBlob}/circusBackground.png`,
  featured: '',
  colorPrimary: '#2698c7',
  rgbColor: '38, 152, 199',
  colorSecondary: '#2698c7',
  fontColor: 'white',
  about: about,
  tracks: [
    {
    track: "Razor In His Hand",
    url: `${audioBlob}/circusofthegrieving/Razor%20In%20His%20Hand.mp3`,
    downloadURL: `${audioBlob}/circusofthegrieving/Razor%20In%20His%20Hand.mp3?download=1`,
    id: 0,
    lyrics: lyricArray[0].lyrics,
  },
  {
      track: "On Me Now",
      url: `${audioBlob}/circusofthegrieving/On%20Me%20Now.mp3`,
      downloadURL: `${audioBlob}/circusofthegrieving/On%20Me%20Now.mp3?download=1`,
      id: 1,
      lyrics: lyricArray[1].lyrics,
    },
    {
      track: "Bottle and a Gun",
      url: `${audioBlob}/circusofthegrieving/Bottle%20and%20a%20Gun.mp3`,
      downloadURL: `${audioBlob}/circusofthegrieving/Bottle%20and%20a%20Gun.mp3?download=1`,
      id: 2,
      lyrics: lyricArray[2].lyrics,
    },
    {
      track: "Radiate",
      url: `${audioBlob}/circusofthegrieving/Bottle%20and%20a%20Gun.mp3`,
      downloadURL: `${audioBlob}/circusofthegrieving/Bottle%20and%20a%20Gun.mp3?download=1`,
      id: 2,
      lyrics: lyricArray[2].lyrics,
    },
    {
      track: "Radiate",
      url: `${audioBlob}/circusofthegrieving/Radiate.mp3`,
      downloadURL: `${audioBlob}/circusofthegrieving/Radiate.mp3?download=1`,
      id: 3,
      lyrics: lyricArray[3].lyrics,
    },
    {
      track: "Close to Jesus",
      url: `${audioBlob}/circusofthegrieving/Close%20To%20Jesus.mp3`,
      downloadURL: `${audioBlob}/circusofthegrieving/Close%20To%20Jesus.mp3?download=1`,
      id: 4,
      lyrics: lyricArray[4].lyrics,
    },
    {
      track: "Wildflowers",
      url: `${audioBlob}/circusofthegrieving/Wildflowers.mp3`,
      downloadURL: `${audioBlob}/circusofthegrieving/Wildflowers.mp3?download=1`,
      id: 5,
      lyrics: lyricArray[5].lyrics,
    },
    {
      track: "I Tried",
      url: `${audioBlob}/circusofthegrieving/I%20Tried.mp3`,
      downloadURL: `${audioBlob}/circusofthegrieving/I%20Tried.mp3?download=1`,
      id: 6,
      lyrics: lyricArray[6].lyrics,
    },
    {
      track: "Infinite December",
      url: `${audioBlob}/circusofthegrieving/Infinite%20December.mp3`,
      downloadURL: `${audioBlob}/circusofthegrieving/Infinite%20December.mp3?download=1`,
      id: 7,
      lyrics: lyricArray[7].lyrics,
    },
    {
      track: "Indiana",
      url: `${audioBlob}/circusofthegrieving/Indiana.mp3`,
      downloadURL: `${audioBlob}/circusofthegrieving/Indiana.mp3?download=1`,
      id: 8,
      lyrics: lyricArray[8].lyrics,
    },
    {
      track: "Cold Enough",
      url: `${audioBlob}/circusofthegrieving/Cold%20Enough.mp3`,
      downloadURL: `${audioBlob}/circusofthegrieving/Cold%20Enough.mp3?download=1`,
      id: 9,
      lyrics: lyricArray[9].lyrics,
    },
  ]
}




export default album;