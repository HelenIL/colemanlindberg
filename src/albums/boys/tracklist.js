import cover from "../../assets/boys_cover.jpg";
import cole from '../../assets/little-cole_gray2.jpeg'
import {lyrics} from './extras.js'
import background from '../../assets/boys_curv.png'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;

const album = {
  album: "Boys",
  cover: cover,
  background: background,
  color: '#9284f1',
  colorII: '#9284f1',
  fontColor: 'white',
  pic: cole,
  about: 'In 2000, inspired by the DIY ethics and folk/punk aesthetic of Ani Difranco, I released my first full-length album Boys. I had been writing original songs for about 3 years when I put this record out. It reflected my youth, my struggle to find and keep love, my queer rage, my grief at losing my innocence, and the earnest belief that my friends and I could change the world with music, art, and activism. Boys was a true statement of individuality, emotion, passion, and hope. I may be a more accomplished guitarist and singer now, but I don’t think I’ll ever be as open, raw, and honest as I was on Boys.',
  tracks: [
  { 
    name: "4 Inches Away", 
    artist: "Coleman Lindberg", 
    album: 'Boys', 
    url: '/tracks/boys/01fourinchesaway.mp3', 
    id: 0, image: cover, pic: cole, lyrics: lyricArray[0].lyrics},
  { name: "Happy Now", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/02happynow.mp3', 
    id: 1, image: cover, pic: cole, lyrics: lyricArray[1].lyrics},
  { name: "Math", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/03math.mp3', 
    id: 2, image: cover, pic: cole, lyrics: lyricArray[2].lyrics},
  { name: "Slow News Day", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/04slownewsday.mp3', 
    id: 3, image: cover, pic: cole, lyrics: lyricArray[3].lyrics},
  { name: "Worthy", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/05worthy.mp3', 
    id: 4, image: cover, pic: cole, lyrics: lyricArray[4].lyrics},
  { name: "Where I End", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/06whereiam.mp3', 
    id: 5, image: cover, pic: cole, lyrics: lyricArray[5].lyrics},
  { name: "This Love Song", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/07thislovesong.mp3', 
    id: 6, image: cover, pic: cole, lyrics: lyricArray[6].lyrics},
  { name: "50 Yellow Tulips", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/08fiftyyellowtulips.mp3', 
    id: 7, image: cover, pic: cole, lyrics: lyricArray[7].lyrics},
  { name: "4 Weeks", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/09fourweeks.mp3', 
    id: 8, image: cover, pic: cole, lyrics: lyricArray[8].lyrics},
  { name: "I Dare You", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/10idareyou.mp3', 
    id: 9, image: cover, pic: cole, lyrics: lyricArray[9].lyrics},
  { name: "Piece Of Sky", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/11pieceofsky.mp3', 
    id: 10, image: cover, pic: cole, lyrics: lyricArray[10].lyrics},
  { name: "Boys (live 1999)", artist: "Coleman Lindberg", album: 'Boys', 
    url: '/tracks/boys/12boyslive.mp3', 
    id: 11, image: cover, pic: cole, lyrics: lyricArray[11].lyrics}
  ]
}

export default album;