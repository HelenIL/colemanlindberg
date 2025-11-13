import one from './tracks/FirstAvenue.wav';
import three from './tracks/Skyline.wav';
import two from './tracks/LakeStreet.wav';
import four from './tracks/ColdAsSnow.wav';
import five from './tracks/GoodTimes.wav';
import six from './tracks/SpringCocaine.wav';
import seven from './tracks/Weight.wav';
import eight from './tracks/StoryOfUs.wav';
import nine from './tracks/SkylineHeaven.wav';
import cover from '../../assets/skylines.jpg';
import cole from '../../assets/cole_city_edit.jpeg'
import {lyrics} from './extras.js'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;

const tracks = [
  {
    name: "First Avenue",
    artist: "Coleman Lindberg",
    album: 'Skylines',
    url: one,
    id: 0,
    image: cover,
    pic: cole,
    lyrics: lyricArray[0].lyrics,
  },
    {
      name: "Lake Street",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: two,
      id: 1,
      image: cover,
      pic: cole,
      lyrics: lyricArray[0].lyrics,
    },
    {
      name: "Skyline",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: three,
      id: 2,
      image: cover,
      pic: cole,
      lyrics: lyricArray[0].lyrics,
    },
    {
      name: "Cold as Snow",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: four,
      id: 3,
      image: cover,
      pic: cole,
      lyrics: lyricArray[0].lyrics,
    },
    {
      name: "Good Times",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: five,
      id: 4,
      image: cover,
      pic: cole,
      lyrics: lyricArray[0].lyrics,
    },
    {
      name: "Spring Cocaine",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: six,
      id: 5,
      image: cover,
      pic: cole,
      lyrics: lyricArray[0].lyrics,
    },
    {
      name: "The Weight of Not Forgetting You",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: seven,
      id: 6,
      image: cover,
      pic: cole,
      lyrics: lyricArray[0].lyrics,
    },
    {
      name: "Story of Us",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: eight,
      id: 7,
      image: cover,
      pic: cole,
      lyrics: lyricArray[0].lyrics,
    },
    { name: "Skyline Heaven", 
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: nine, id: 8, 
      image: cover, 
      pic: cole, 
      lyrics: lyricArray[0].lyrics,
    }
    
];

export default tracks;