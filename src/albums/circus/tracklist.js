import cover from '../../assets/circus_cover.jpg'
import {lyrics, about} from './extras.js'
import cole from '../../assets/cole_city_edit.jpeg'
import background from '../../assets/headshot_edit3.jpeg'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;
const album = {
  album: "Circus of the Grieving",
  cover: cover,
  background: background,
  color: '#2698c7',
  rgbColor: '38, 152, 199',
  colorII: '#2698c7',
  fontColor: 'white',
  pic: cole,
  about: about,
  tracks: [
    {
    name: "Razor In His Hand",
    artist: "Coleman Lindberg",
    album: 'The Circus Of The Grieving',
    url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/circusofthegrieving/Razor%20In%20His%20Hand.mp3`,
    id: 0,
    image: cover,
    pic: cole,
    lyrics: lyricArray[0].lyrics,
    
    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula ut felis nec mollis. Mauris semper lectus eu nibh molestie vestibulum. Etiam sodales rhoncus nulla. Quisque ac augue tincidunt, aliquam lorem nec, vulputate mi. Fusce pellentesque neque ac neque interdum, et blandit urna gravida. Nulla luctus enim at augue tempus, sed dignissim erat aliquet. Quisque facilisis nisi nec arcu venenatis rhoncus. Aenean pulvinar libero elit, quis pharetra velit commodo eget. Ut sed dui vel nibh commodo suscipit. Vivamus tristique mauris sit amet felis finibus, nec rhoncus lectus porta. Cras pharetra ante sed ligula ullamcorper lacinia. Nunc euismod gravida odio et porta. Sed tempus diam sit amet aliquam venenatis."
  },
  {
      name: "On Me Now",
      artist: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/circusofthegrieving/On%20Me%20Now.mp3`,
      id: 1,
      image: cover,
      pic: cole,

            lyrics: lyricArray[1].lyrics,

      blurb: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst."
    },
    {
      name: "Bottle and a Gun",
      artist: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/circusofthegrieving/Bottle%20and%20a%20Gun.mp3`,
      id: 2,
      image: cover,
      pic: cole,
      lyrics: lyricArray[2].lyrics,
      blurb: "Praesent euismod, erat in facilisis cursus, libero risus gravida odio, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero. Nullam euismod, justo at facilisis cursus, enim urna fringilla nulla, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero."
    },
    {
      name: "Radiate",
      artist: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/circusofthegrieving/Radiate.mp3`,
      id: 3,
      image: cover,
      pic: cole,
      lyrics: lyricArray[3].lyrics,
      blurb: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      name: "Close to Jesus",
      artist: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/circusofthegrieving/Close%20To%20Jesus.mp3`,
      id: 4,
      image: cover,
      pic: cole,
      lyrics: lyricArray[4].lyrics,
      blurb: "Vestibulum leo tellus, cursus non odio vitae, ornare luctus risus. Proin ex sem, hendrerit id tristique ac, interdum et nulla. Ut auctor velit neque, vitae finibus erat viverra at. Donec quis libero in felis feugiat iaculis. Aliquam odio elit, ultrices in lorem et, ultricies pulvinar sem. Donec risus purus, eleifend a nisi efficitur, venenatis convallis massa. Aenean bibendum quis nisl nec egestas. Vivamus non risus tempor, vehicula ex et, venenatis lorem. Aliquam erat volutpat. Nulla turpis neque, posuere ac nulla vel, interdum gravida tortor. Duis ac nunc nibh."
    },
    {
      name: "Wildflowers",
      artist: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/circusofthegrieving/Wildflowers.mp3`,
      id: 5,
      image: cover,
      pic: cole,
      lyrics: lyricArray[5].lyrics,
      blurb: "Curabitur non felis massa. In hac habitasse platea dictumst. Nullam euismod, justo at facilisis cursus, enim urna fringilla nulla, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero. Nullam euismod, justo at facilisis cursus, enim urna fringilla nulla, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero."
    },
    {
      name: "I Tried",
      artist: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/circusofthegrieving/I%20Tried.mp3`,
      id: 6,
      image: cover,
      pic: cole,
      lyrics: lyricArray[6].lyrics,
      blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula ut felis nec mollis. Mauris semper lectus eu nibh molestie vestibulum. Etiam sodales rhoncus nulla. Quisque ac augue tincidunt, aliquam lorem nec, vulputate mi. Fusce pellentesque neque ac neque interdum, et blandit urna gravida. Nulla luctus enim at augue tempus, sed dignissim erat aliquet. Quisque facilisis nisi nec arcu venenatis rhoncus. Aenean pulvinar libero elit, quis pharetra velit commodo eget. Ut sed dui vel nibh commodo suscipit. Vivamus tristique mauris sit amet felis finibus, nec rhoncus lectus porta. Cras pharetra ante sed ligula ullamcorper lacinia. Nunc euismod gravida odio et porta. Sed tempus diam sit amet aliquam venenatis."
    },
    {
      name: "Infinite December",
      artist: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/circusofthegrieving/Infinite%20December.mp3`,
      id: 7,
      image: cover,
      pic: cole,
      lyrics: lyricArray[7].lyrics,
      blurb: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst."
    },
    {
      name: "Indiana",
      artist: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/circusofthegrieving/Indiana.mp3`,
      id: 8,
      image: cover,
      pic: cole,
      lyrics: lyricArray[8].lyrics,
      blurb: "Praesent euismod, erat in facilisis cursus, libero risus gravida odio, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero. Nullam euismod, justo at facilisis cursus, enim urna fringilla nulla, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero."
    },
    {
      name: "Cold Enough",
      artist: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: `https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/circusofthegrieving/Cold%20Enough.mp3`,
      id: 9,
      image: cover,
      pic: cole,
      lyrics: lyricArray[9].lyrics,
      blurb: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
  ]
}




export default album;