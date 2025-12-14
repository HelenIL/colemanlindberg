import cover from '../../assets/skylines_cover.jpg';
import cole from '../../assets/cole_city_edit.jpeg'
import {lyrics} from './extras.js'
import background from '../../assets/skylines_edit.jpg'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;

const album = {
  album: 'Skylines',
  cover: cover,
  background: background,
  color: '#f8f5a7',
  colorII: '#f8f5a7',
  fontColor: 'black',
  pic: cole,
  about: 'One of my greatest long-time loves has been the city of Minneapolis. When I was a kid the skyline always symbolized excitement, energy, danger, and possibility. I grew up along Lake Street–riding buses, digging through record bins, hanging out at coffee shops, and shopping at thrift stores. I was inspired by punk and alternative culture, and I was drawn to the art and music scenes of my hometown. Skylines is a collection of songs about my relationship to (and fascination with) Minneapolis, where the city becomes a main character in my narrative. I decided to record this album in 2013, while I was a student at McNally Smith College of Music, with the help of sound engineer Andy Halvorson. These songs were performed on piano and acoustic guitar and left in raw, demo form–a testament to the struggles and adventures I’ve had in the shadows of the glistening towers of the Minneapolis skyline.',
  tracks: [
    {
    name: "First Avenue",
    artist: "Coleman Lindberg",
    album: 'Skylines',
    url: '/tracks/skylines/01FirstAvenue.mp3',
    id: 0,
    image: cover,
    pic: '/tracks/skylines/01FirstAvenue.mp3',
    lyrics: lyricArray[0].lyrics,
  },
    {
      name: "Lake Street",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: '/tacks/skylines/02LakeStreet.mp3',
      id: 1,
      image: cover,
      pic: cole,
      lyrics: lyricArray[1].lyrics,
    },
    {
      name: "Skyline",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: '/tracks/skylines/03Skyline.mp3',
      id: 2,
      image: cover,
      pic: cole,
      lyrics: lyricArray[2].lyrics,
    },
    {
      name: "Cold as Snow",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: '/tracks/skylines/04ColdAsSnow.mp3',
      id: 3,
      image: cover,
      pic: cole,
      lyrics: lyricArray[3].lyrics,
    },
    {
      name: "Good Times",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: '/tracks/skylines/05GoodTimes.mp3',
      id: 4,
      image: cover,
      pic: cole,
      lyrics: lyricArray[4].lyrics,
    },
    {
      name: "Spring Cocaine",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: '/tracks/skylines/06SpringCocaine.mp3',
      id: 5,
      image: cover,
      pic: cole,
      lyrics: lyricArray[5].lyrics,
    },
    {
      name: "The Weight of Not Forgetting You",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: '/tracks/skylines/07TheWeight.mp3',
      id: 6,
      image: cover,
      pic: cole,
      lyrics: lyricArray[6].lyrics,
    },
    {
      name: "Story of Us",
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: '/tracks/skylines/08StoryOfUs.mp3',
      id: 7,
      image: cover,
      pic: cole,
      lyrics: lyricArray[7].lyrics,
    },
    { name: "Skyline Heaven", 
      artist: "Coleman Lindberg",
      album: 'Skylines',
      url: '/tracks/skylines/09SkylineHeaven.mp3', 
      id: 8, 
      image: cover, 
      pic: cole, 
      lyrics: lyricArray[8].lyrics,
    }
  ]
}


export default album;