import one from "./tracks/01fourinchesaway.mp3";
import two from "./tracks/02happynow.mp3";
import three from "./tracks/03math.mp3";
import four from "./tracks/04slownewsday.mp3";
import five from "./tracks/05worthy.mp3";
import six from "./tracks/06whereiam.mp3";
import seven from "./tracks/07thislovesong.mp3";
import eight from "./tracks/08fiftyyellowtulips.mp3";
import nine from "./tracks/09fourweeks.mp3";
import ten from "./tracks/10idareyou.mp3";
import eleven from './tracks/11pieceofsky.mp3';
import twelve from './tracks/12boyslive.mp3';
import cover from "../../assets/coverBoys.jpg";
import cole from '../../assets/little-cole_gray3.jpeg'
import {lyrics} from './extras.js'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;

const album = {
  album: "Boys",
  cover: cover,
  color: '#9284f1',
  pic: cole,
  about: 'Donec viverra erat quis est commodo viverra. Aenean vitae efficitur ante, a fermentum sem. Phasellus vel ante lobortis, suscipit nibh nec, euismod eros. Proin iaculis a eros at hendrerit. Ut at leo iaculis, ornare neque ut, molestie lorem. Nulla a felis risus. Quisque ac consectetur dolor. Donec placerat eros ligula, vel iaculis ligula laoreet vel. Integer sit amet semper est, in rutrum nibh. Donec lobortis venenatis consectetur. Nulla vitae ornare arcu.',
  tracks: [
  { name: "4 Inches Away", artist: "Coleman Lindberg", album: 'Boys', url: one, id: 0, image: cover, pic: cole, lyrics: lyricArray[0].lyrics},
  { name: "Happy Now", artist: "Coleman Lindberg", album: 'Boys', url: two, id: 1, image: cover, pic: cole, lyrics: lyricArray[1].lyrics},
  { name: "Math", artist: "Coleman Lindberg", album: 'Boys', url: three, id: 2, image: cover, pic: cole, lyrics: lyricArray[2].lyrics},
  { name: "Slow News Day", artist: "Coleman Lindberg", album: 'Boys', url: four, id: 3, image: cover, pic: cole, lyrics: lyricArray[3].lyrics},
  { name: "Worthy", artist: "Coleman Lindberg", album: 'Boys', url: five, id: 4, image: cover, pic: cole, lyrics: lyricArray[4].lyrics},
  { name: "Where I End", artist: "Coleman Lindberg", album: 'Boys', url: six, id: 5, image: cover, pic: cole, lyrics: lyricArray[5].lyrics},
  { name: "This Love Song", artist: "Coleman Lindberg", album: 'Boys', url: seven, id: 6, image: cover, pic: cole, lyrics: lyricArray[6].lyrics},
  { name: "50 Yellow Tulips", artist: "Coleman Lindberg", album: 'Boys', url: eight, id: 7, image: cover, pic: cole, lyrics: lyricArray[7].lyrics},
  { name: "4 Weeks", artist: "Coleman Lindberg", album: 'Boys', url: nine, id: 8, image: cover, pic: cole, lyrics: lyricArray[8].lyrics},
  { name: "I Dare You", artist: "Coleman Lindberg", album: 'Boys', url: ten, id: 9, image: cover, pic: cole, lyrics: lyricArray[9].lyrics},
  { name: "Piece Of Sky", artist: "Coleman Lindberg", album: 'Boys', url: eleven, id: 10, image: cover, pic: cole, lyrics: lyricArray[10].lyrics},
  { name: "Boys (live 1999)", artist: "Coleman Lindberg", album: 'Boys', url: twelve, id: 11, image: cover, pic: cole, lyrics: lyricArray[11].lyrics}
  ]
}
const tracks = [
  { name: "4 Inches Away", artist: "Coleman Lindberg", album: 'Boys', url: one, id: 0, image: cover, pic: cole, lyrics: lyricArray[0].lyrics},
  { name: "Happy Now", artist: "Coleman Lindberg", album: 'Boys', url: two, id: 1, image: cover, pic: cole, lyrics: lyricArray[1].lyrics},
  { name: "Math", artist: "Coleman Lindberg", album: 'Boys', url: three, id: 2, image: cover, pic: cole, lyrics: lyricArray[2].lyrics},
  { name: "Slow News Day", artist: "Coleman Lindberg", album: 'Boys', url: four, id: 3, image: cover, pic: cole, lyrics: lyricArray[3].lyrics},
  { name: "Worthy", artist: "Coleman Lindberg", album: 'Boys', url: five, id: 4, image: cover, pic: cole, lyrics: lyricArray[4].lyrics},
  { name: "Where I End", artist: "Coleman Lindberg", album: 'Boys', url: six, id: 5, image: cover, pic: cole, lyrics: lyricArray[5].lyrics},
  { name: "This Love Song", artist: "Coleman Lindberg", album: 'Boys', url: seven, id: 6, image: cover, pic: cole, lyrics: lyricArray[6].lyrics},
  { name: "50 Yellow Tulips", artist: "Coleman Lindberg", album: 'Boys', url: eight, id: 7, image: cover, pic: cole, lyrics: lyricArray[7].lyrics},
  { name: "4 Weeks", artist: "Coleman Lindberg", album: 'Boys', url: nine, id: 8, image: cover, pic: cole, lyrics: lyricArray[8].lyrics},
  { name: "I Dare You", artist: "Coleman Lindberg", album: 'Boys', url: ten, id: 9, image: cover, pic: cole, lyrics: lyricArray[9].lyrics},
  { name: "Piece Of Sky", artist: "Coleman Lindberg", album: 'Boys', url: eleven, id: 10, image: cover, pic: cole, lyrics: lyricArray[10].lyrics},
  { name: "Boys (live 1999)", artist: "Coleman Lindberg", album: 'Boys', url: twelve, id: 11, image: cover, pic: cole, lyrics: lyricArray[11].lyrics}
];

export default album;