import {lyrics, about} from './extras.js'


const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;
const audioBlob = 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com'
const backgroundBlob ='https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/backgrounds'
const featuredBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/featured'
const coverBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/covers'

const album = {
  artist: "Coleman Lindberg",
  album: 'Skylines',
  cover: `${coverBlob}/skylinesCover.jpg`,
  background: `${backgroundBlob}/skylinesBackground.jpg`,
  featured: `${featuredBlob}/skylinesFeature.jpeg`,
  colorPrimary: '#f8f5a7',
  rgbColor: '248, 245, 167',
  colorSecondary: '#f8f5a7',
  fontColor: 'black',
  about: about,
  tracks: [
    {
    track: "First Avenue",
    url: `${audioBlob}/skylines/First%20Avenue.mp3`,
    downloadURL: `${audioBlob}//skylines/First%20Avenue.mp3?download=1`,
    id: 0,
    lyrics: lyricArray[0].lyrics,
  },
    {
      track: "Lake Street",
      url: `${audioBlob}/skylines/Lake%20Street.mp3`,
      downloadURL: `${audioBlob}/skylines/Lake%20Street.mp3?download=1`,
      id: 1,
      lyrics: lyricArray[1].lyrics,
    },
    {
      track: "Skyline",
      url: `${audioBlob}/skylines/03Skyline.mp3`,
      downloadURL: `${audioBlob}/skylines/03Skyline.mp3?download=1`,
      id: 2,
      lyrics: lyricArray[2].lyrics,
    },
    {
      track: "Cold as Snow",
      url: `${audioBlob}/skylines/Cold%20As%20Snow.mp3`,
      downloadURL: `${audioBlob}/skylines/Cold%20As%20Snow.mp3?download=1`,
      id: 3,
      lyrics: lyricArray[3].lyrics,
    },
    {
      track: "Good Times",
      url: `${audioBlob}/skylines/Good%20Times.mp3`,
      downloadURL: `${audioBlob}/skylines/Good%20Times.mp3?download=1`,
      id: 4,
      lyrics: lyricArray[4].lyrics,
    },
    {
      track: "Spring Cocaine",
      url: `${audioBlob}/skylines/Spring%20Cocaine.mp3`,
      downloadURL: `${audioBlob}/skylines/Spring%20Cocaine.mp3?download=1`,
      id: 5,
      lyrics: lyricArray[5].lyrics,
    },
    {
      track: "The Weight of Not Forgetting You",
      url: `${audioBlob}/skylines/The%20Weight%20Of%20Not%20Forgetting%20You.mp3`,
      downloadURL: `${audioBlob}/skylines/The%20Weight%20Of%20Not%20Forgetting%20You.mp3?download=1`,
      id: 6,
      lyrics: lyricArray[6].lyrics,
    },
    {
      track: "Story of Us",
      url: `${audioBlob}/skylines/Story%20Of%20Us.mp3`,
      downloadURL: `${audioBlob}/skylines/Story%20Of%20Us.mp3?download=1`,
      id: 7,
      lyrics: lyricArray[7].lyrics,
    },
    { 
      track: "Skyline Heaven", 
      url: `${audioBlob}/skylines/Skyline%20Heaven.mp3`, 
      downloadURL: `${audioBlob}/skylines/Skyline%20Heaven.mp3?download=1`,
      id: 8, 
      lyrics: lyricArray[8].lyrics,
    }
  ]
}


export default album;