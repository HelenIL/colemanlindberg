import one from "./tracks/01GingerbreadMan.wav";
import two from "./tracks/02SkyAsIs.wav";
import three from "./tracks/03FastFoodHeaven.wav";
import four from "./tracks/04FadedStar.wav";
import five from "./tracks/05OwnTheView.wav";
import six from "./tracks/06Resolutions.wav";
import seven from "./tracks/07TiredOfSnow.wav";
import eight from "./tracks/08GingerbreadMan.wav";
import nine from "./tracks/09HappyNow.wav";
import ten from "./tracks/10SlowNewsDay.wav";
import cole from '../../assets/bridge.png'
import cover from "../../assets/cover2.jpg";
import {lyrics} from './extras.js'
import background from '../../assets/bebe_curv.JPG'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;

const album = {
  album: 'Own the View',
  cover: cover,
  background: background,
  color: '#74c932',
  colorII: '#74c932',
  pic: cole,
  about: 'Curabitur libero quam, consectetur a sodales vel, tincidunt id odio. Sed finibus, velit efficitur vehicula auctor, massa risus eleifend dui, efficitur pellentesque tortor nunc eu diam. Maecenas lobortis non lacus eu tristique. Aenean vel auctor velit. Fusce eu laoreet eros. Nulla lacinia sagittis nulla eu maximus. Donec sit amet vulputate magna, pellentesque dictum metus. Fusce dolor est, sagittis eget sollicitudin nec, congue ut ante. Mauris dui justo, elementum et viverra nec, rutrum vitae lacus. Curabitur fringilla ipsum at tincidunt scelerisque. Curabitur quis suscipit tortor. Etiam id nisi erat. Quisque urna velit, mollis ut augue non, tincidunt scelerisque neque. Duis a metus velit. Pellentesque ac placerat nibh.',
  tracks: [
     {
    name: "Gingerbread Man",
    artist: "The Brotherbears",
    album: 'Own The View',
    url: one,
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
      url: two,
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
      url: three,
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
      url: four,
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
      url: five,
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
      url: six,
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
      url: seven,
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
      url: eight,
      id: 7,
      image: cover,
      pic: cole,
      background: background,
      lyrics: lyricArray[7].lyrics
    },
    { name: "Happy Now", artist: "The Brotherbears", album: 'Own The View', url: nine, id: 8, image: cover, pic: cole, background: background, lyrics: lyricArray[8].lyrics },
    { name: "Slow News Day", artist: "The Brotherbears", album: 'Own The View', url: ten, id: 9, image: cover, pic: cole, background: background, lyrics: lyricArray[9].lyrics }
]

}
// const tracks = [
//   {
//     name: "Gingerbread Man",
//     artist: "The Brotherbears",
//     album: 'Own The View',
//     url: one,
//     id: 0,
//     image: cover,
//     pic: cole,
//     background: background,
//     lyrics: lyricArray[0].lyrics,
//   },
//     {
//       name: "Sky As Is",
//       artist: "The Brotherbears",
//       album: 'Own The View',
//       url: two,
//       id: 1,
//       image: cover,
//       pic: cole,
//       background: background,
//       lyrics: lyricArray[1].lyrics,
//     },
//     {
//       name: "Fast Food Heaven",
//       artist: "The Brotherbears",
//       album: 'Own The View',
//       url: three,
//       id: 2,
//       image: cover,
//       pic: cole,
//       background: background,
//       lyrics: lyricArray[2].lyrics,
//     },
//     {
//       name: "Faded Star",
//       artist: "The Brotherbears",
//       album: 'Own The View',
//       url: four,
//       id: 3,
//       image: cover,
//       pic: cole,
//       background: background,
//       lyrics: lyricArray[3].lyrics,
//     },
//     {
//       name: "Own The View",
//       artist: "The Brotherbears",
//       album: 'Own The View',
//       url: five,
//       id: 4,
//       image: cover,
//       pic: cole,
//       background: background,
//       lyrics: lyricArray[4].lyrics,
//     },
//     {
//       name: "Resolutions",
//       artist: "The Brotherbears",
//       album: 'Own The View',
//       url: six,
//       id: 5,
//       image: cover,
//       pic: cole,
//       background: background,
//       lyrics: lyricArray[5].lyrics,
//     },
//     {
//       name: "Tired Of Snow",
//       artist: "The Brotherbears",
//       album: 'Own The View',
//       url: seven,
//       id: 6,
//       image: cover,
//       pic: cole,
//       background: background,
//       lyrics: lyricArray[6].lyrics,
//     },
//     {
//       name: "Gingerbread Man (Painted Whore Remix)",
//       artist: "The Brotherbears",
//       album: 'Own The View',
//       url: eight,
//       id: 7,
//       image: cover,
//       pic: cole,
//       background: background,
//       lyrics: lyricArray[7].lyrics
//     },
//     { name: "Happy Now", artist: "The Brotherbears", album: 'Own The View', url: nine, id: 8, image: cover, pic: cole, background: background, lyrics: lyricArray[8].lyrics },
//     { name: "Slow News Day", artist: "The Brotherbears", album: 'Own The View', url: ten, id: 9, image: cover, pic: cole, background: background, lyrics: lyricArray[9].lyrics }
// ];


export default album;