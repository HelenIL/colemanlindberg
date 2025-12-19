import { lyrics, about } from './extras.js'


const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;
const audioBlob = 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com'
const backgroundBlob ='https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/backgrounds'
const featuredBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/featured'
const coverBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/covers'


const album = {
  artist: "Coleman Lindberg",
  album: "Boys",
  cover: `${coverBlob}/boysCover.jpg`,
  featured: `${featuredBlob}/boysFeature.jpeg`,
  background: `${backgroundBlob}/boysBackground.png`,
  colorPrimary: '#9284f1',
  rgbColor: '146, 132, 241',
  colorSecondary: '#9284f1',
  fontColor: 'white',
  about: about,
  tracks: [
  { 
    track: "4 Inches Away", 
    url: `${audioBlob}/boys/4%20Inches%20Away.mp3`,
    downloadURL: `${audioBlob}/boys/4%20Inches%20Away.mp3?download=1`, 
    id: 0, 
    lyrics: lyricArray[0].lyrics
  },
  { 
    track: "Happy Now", 
    url: `${audioBlob}/boys/Happy%20Now.mp3`, 
    downloadURL: `${audioBlob}/boys/Happy%20Now.mp3?download=1`, 
    id: 1, 
    lyrics: lyricArray[1].lyrics
  },
  {
    track: "Math", 
    url: `${audioBlob}/boys/03math.mp3`, 
    downloadURL: `${audioBlob}/boys/03math.mp3?download=1`, 
    id: 2, 
    lyrics: lyricArray[2].lyrics
  },
  { 
    track: "Slow News Day", 
    url: `${audioBlob}/boys/Slow%20News%20Day.mp3`, 
    downloadURL: `${audioBlob}/boys/Slow%20News%20Day.mp3?download=1`, 
    id: 3, 
    lyrics: lyricArray[3].lyrics
  },
  { 
    track: "Worthy", 
    url: `${audioBlob}/boys/05worthy.mp3`, 
    downloadURL: `${audioBlob}/boys/05worthy.mp3?download=1`, 
    id: 4, 
    lyrics: lyricArray[4].lyrics
  },
  { 
    track: "Where I End", 
    url: `${audioBlob}/boys/Where%20I%20End.mp3`, 
    downloadURL: `${audioBlob}/boys/Where%20I%20End.mp3?download=1`, 
    id: 5, 
    lyrics: lyricArray[5].lyrics
  },
  { 
    track: "This Love Song", 
    url: `${audioBlob}/boys/This%20Love%20Song.mp3`, 
    downloadURL: `${audioBlob}/boys/This%20Love%20Song.mp3?download=1`, 
    id: 6, 
    lyrics: lyricArray[6].lyrics
  },
  { 
    track: "50 Yellow Tulips", 
    url: `${audioBlob}/boys/50%20Yellow%20Tulips.mp3`, 
    downloadURL: `${audioBlob}/boys/50%20Yellow%20Tulips.mp3?download=1`, 
    id: 7, 
    lyrics: lyricArray[7].lyrics
  },
  { 
    track: "4 Weeks", 
    url: `${audioBlob}/boys/4%20Weeks.mp3`, 
    downloadURL: `${audioBlob}/boys/4%20Weeks.mp3?download=1`, 
    id: 8, 
    lyrics: lyricArray[8].lyrics
  },
  { 
    track: "I Dare You", 
    url: `${audioBlob}/boys/I%20Dare%20You.mp3`, 
    downloadURL: `${audioBlob}/boys/I%20Dare%20You.mp3?download=1`, 
    id: 9, 
    lyrics: lyricArray[9].lyrics
  },
  { 
    track: "Piece Of Sky", 
    url: `${audioBlob}/boys/Piece%20of%20Sky.mp3`, 
    downloadURL: `${audioBlob}/boys/Piece%20of%20Sky.mp3?download=1`, 
    id: 10, 
    lyrics: lyricArray[10].lyrics
  },
  { 
    track: "Boys (live 1999)", 
    url: `${audioBlob}/boys/12boyslive.mp3`, 
    downloadURL: `${audioBlob}/boys/12boyslive.mp3?download=1`, 
    id: 11, 
    lyrics: lyricArray[11].lyrics
  }
  ]
}

export default album;