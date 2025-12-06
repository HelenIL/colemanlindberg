import one from './tracks/WoundedWinter.wav'
import two from './tracks/CrawlingHome.wav'
import three from './tracks/CloserCorners.wav'
import four from './tracks/HardTimes.wav'
import five from './tracks/SkySoBlue.wav'
import six from './tracks/MakingMyName.wav'
import seven from './tracks/JTrain.wav'
import {lyrics} from './extras.js'
import cover from '../../assets/makingmyname_cover.jpg'
import cole from '../../assets/cole_edit.jpg'
import background from '../../assets/mmn_curv.jpeg'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;

const album = {
    album: 'Making My Name',
    cover: cover,
    background: background,
    color: '#dca58f',
    colorII: '#dea88e',
    fontColor: 'white',
    pic: '',
    about: 'Aliquam vel ex purus. Aliquam ultrices ligula sed orci malesuada tempus. Donec in gravida sem, id bibendum nisl. Nullam ac urna neque. Sed aliquam elit magna, a vestibulum quam malesuada vitae. Sed vulputate volutpat leo, vel lacinia massa. Vestibulum suscipit efficitur arcu sit amet fringilla. Curabitur viverra urna et purus maximus egestas. Nullam vel urna ante. Pellentesque luctus sapien non dui porttitor placerat. Maecenas massa ex, sagittis sed justo sit amet, fringilla euismod turpis.',
    tracks: [
        {
            name: "Wounded Winter",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: one,
            id: 0,
            image: cover,
            pic: cole,
            lyrics: lyricArray[0].lyrics,
        },
               {
            name: "Crawling Home",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: two,
            id: 1,
            image: cover,
            pic: cole,
            lyrics: lyricArray[1].lyrics,
        },
               {
            name: "Closer on the Corners",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: three,
            id: 2,
            image: cover,
            pic: cole,
            lyrics: lyricArray[2].lyrics,
        },
               {
            name: "Hard Times, Come Again No More",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: four,
            id: 3,
            image: cover,
            pic: cole,
            lyrics: lyricArray[3].lyrics,
        },
               {
            name: "Sky So Blue",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: five,
            id: 4,
            image: cover,
            pic: cole,
            lyrics: lyricArray[4].lyrics,
        },
               {
            name: "Making My Name",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: six,
            id: 5,
            image: cover,
            pic: cole,
            lyrics: lyricArray[5].lyrics,
        },
               {
            name: "J-Train",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: seven,
            id: 6,
            image: cover,
            pic: cole,
            lyrics: lyricArray[6].lyrics,
        },
    ]
}


export default album;