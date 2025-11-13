import one from './tracks/RazorInHisHand.mp3'
import two from './tracks/OnMeNow.mp3'
import three from './tracks/BottleandaGun.mp3'
import four from './tracks/Radiate.mp3'
import five from './tracks/ClosetoJesus.mp3'
import six from './tracks/Wildflowers.mp3'
import seven from './tracks/ITried.mp3'
import eight from './tracks/InfiniteDecember.mp3'
import nine from './tracks/Indiana.mp3'
import ten from './tracks/ColdEnough.mp3'
import cover from '../../assets/album_cover_idea2.jpg'
import background from '../../assets/circus_curv_2.jpg'
import {lyrics} from './extras.js'
import cole from '../../assets/cole_city_edit.jpeg'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;



const tracks = [
  {
    name: "Razor In His Hand",
    author: "Coleman Lindberg",
    album: 'The Circus Of The Grieving',
    url: one,
    id: 0,
    image: cover,
    pic: cole,
    background: background,
    color: "#00aeb0",
       lyrics: lyricArray[0].lyrics,

    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula ut felis nec mollis. Mauris semper lectus eu nibh molestie vestibulum. Etiam sodales rhoncus nulla. Quisque ac augue tincidunt, aliquam lorem nec, vulputate mi. Fusce pellentesque neque ac neque interdum, et blandit urna gravida. Nulla luctus enim at augue tempus, sed dignissim erat aliquet. Quisque facilisis nisi nec arcu venenatis rhoncus. Aenean pulvinar libero elit, quis pharetra velit commodo eget. Ut sed dui vel nibh commodo suscipit. Vivamus tristique mauris sit amet felis finibus, nec rhoncus lectus porta. Cras pharetra ante sed ligula ullamcorper lacinia. Nunc euismod gravida odio et porta. Sed tempus diam sit amet aliquam venenatis."
  },
  {
      name: "On Me Now",
      author: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: two,
      id: 1,
      image: cover,
      pic: cole,
      background: background,
      color: "#00aeb0",
            lyrics: lyricArray[1].lyrics,

      blurb: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst."
    },
    {
      name: "Bottle and a Gun",
      author: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: three,
      id: 2,
      image: cover,
      pic: cole,
      background: background,
      color: "#00aeb0",
      lyrics: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst.",
      blurb: "Praesent euismod, erat in facilisis cursus, libero risus gravida odio, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero. Nullam euismod, justo at facilisis cursus, enim urna fringilla nulla, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero."
    },
    {
      name: "Radiate",
      author: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: four,
      id: 3,
      image: cover,
      pic: cole,
      background: background,
      color: "#00aeb0",
      lyrics: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst.",
      blurb: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      name: "Close to Jesus",
      author: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: five,
      id: 4,
      image: cover,
      pic: cole,
      background: background,
      color: "#00aeb0",
      lyrics: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst.",
      blurb: "Vestibulum leo tellus, cursus non odio vitae, ornare luctus risus. Proin ex sem, hendrerit id tristique ac, interdum et nulla. Ut auctor velit neque, vitae finibus erat viverra at. Donec quis libero in felis feugiat iaculis. Aliquam odio elit, ultrices in lorem et, ultricies pulvinar sem. Donec risus purus, eleifend a nisi efficitur, venenatis convallis massa. Aenean bibendum quis nisl nec egestas. Vivamus non risus tempor, vehicula ex et, venenatis lorem. Aliquam erat volutpat. Nulla turpis neque, posuere ac nulla vel, interdum gravida tortor. Duis ac nunc nibh."
    },
    {
      name: "Wildflowers",
      author: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: six,
      id: 5,
      image: cover,
      pic: cole,
      background: background,
      color: "#00aeb0",
      lyrics: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst.",
      blurb: "Curabitur non felis massa. In hac habitasse platea dictumst. Nullam euismod, justo at facilisis cursus, enim urna fringilla nulla, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero. Nullam euismod, justo at facilisis cursus, enim urna fringilla nulla, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero."
    },
    {
      name: "I Tried",
      author: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: seven,
      id: 6,
      image: cover,
      pic: cole,
      background: background,
      color: "#00aeb0",
      lyrics: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst.",
      blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula ut felis nec mollis. Mauris semper lectus eu nibh molestie vestibulum. Etiam sodales rhoncus nulla. Quisque ac augue tincidunt, aliquam lorem nec, vulputate mi. Fusce pellentesque neque ac neque interdum, et blandit urna gravida. Nulla luctus enim at augue tempus, sed dignissim erat aliquet. Quisque facilisis nisi nec arcu venenatis rhoncus. Aenean pulvinar libero elit, quis pharetra velit commodo eget. Ut sed dui vel nibh commodo suscipit. Vivamus tristique mauris sit amet felis finibus, nec rhoncus lectus porta. Cras pharetra ante sed ligula ullamcorper lacinia. Nunc euismod gravida odio et porta. Sed tempus diam sit amet aliquam venenatis."
    },
    {
      name: "Infinite December",
      author: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: eight,
      id: 7,
      image: cover,
      pic: cole,
      background: background,
      color: "#00aeb0",
      lyrics: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst.",
      blurb: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst."
    },
    {
      name: "Indiana",
      author: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: nine,
      id: 8,
      image: cover,
      pic: cole,
      background: background,
      color: "#00aeb0",
      lyrics: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst.",
      blurb: "Praesent euismod, erat in facilisis cursus, libero risus gravida odio, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero. Nullam euismod, justo at facilisis cursus, enim urna fringilla nulla, in convallis erat odio a ligula. Curabitur euismod, augue in facilisis facilisis, risus erat congue nunc, in efficitur ligula risus a libero."
    },
    {
      name: "Cold Enough",
      author: "Coleman Lindberg",
      album: 'The Circus Of The Grieving',
      url: ten,
      id: 9,
      image: cover,
      pic: cole,
      background: background,
      color: "#00aeb0",
      lyrics: "In iaculis nulla nulla, id dictum ligula auctor in. Maecenas consectetur tortor non urna luctus, at lobortis quam malesuada. Ut pharetra ex non justo ornare ornare. Donec a massa sem. Fusce et mollis ex, a semper velit. Nulla facilisi. Aenean auctor vestibulum erat, ut vehicula tellus posuere nec. Nullam rhoncus vehicula eros quis vulputate. Nunc non suscipit felis. In hac habitasse platea dictumst.",
      blurb: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },

];

export default tracks;