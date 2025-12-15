// import one from './tracks/WoundedWinter.wav'
// import two from './tracks/CrawlingHome.wav'
// import three from './tracks/CloserCorners.wav'
// import four from './tracks/HardTimes.wav'
// import five from './tracks/SkySoBlue.wav'
// import six from './tracks/MakingMyName.wav'
// import seven from './tracks/JTrain.wav'
import {lyrics} from './extras.js'
import cover from '../../assets/makingmyname_cover.jpg'
// import cole from '../../assets/cole_edit.jpg'
import background from '../../assets/mmn_curv.jpeg'
import cole from '../../assets/mmn-back_edit.jpg'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;

const album = {
    album: 'Making My Name',
    cover: cover,
    background: background,
    color: '#dca58f',
    colorII: '#dea88e',
    fontColor: 'white',
    pic: cole,
    about: 'In the years following the breakup of Winter Machine I was focused on playing in the churches where my mom was a pastor, performing at services, weddings, and funerals, and writing new original material as well. When my grandmother died in May of 2005 she left my mom some money and she decided to put some of it towards studio time. I enlisted the help of my friend and producer Amy Van Patten and set out to record a new 7-song EP called Making My Name. These songs chronicle my struggles with addiction, my loneliness and longing, my family relationships, my grief at the death of my grandmother, and my hunger to keep pursuing a music career. Released in March of 2006, Making My Name garnered some great reviews in the local press. I worked hard playing shows, contributing to political events, and raising money for nonprofits. This album marks an artistic and spiritual turning point in my life, a time when I was fighting to survive and be heard.',
    tracks: [
        {
            name: "Wounded Winter",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/makingmyname/01WoundedWinter.mp3',
            id: 0,
            image: cover,
            pic: cole,
            lyrics: lyricArray[0].lyrics,
        },
               {
            name: "Crawling Home",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/makingmyname/02CrawlingHome.mp3',
            id: 1,
            image: cover,
            pic: cole,
            lyrics: lyricArray[1].lyrics,
        },
               {
            name: "Closer on the Corners",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/makingmyname/03Closer.mp3',
            id: 2,
            image: cover,
            pic: cole,
            lyrics: lyricArray[2].lyrics,
        },
               {
            name: "Hard Times, Come Again No More",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/makingmyname/04HardTimes.mp3',
            id: 3,
            image: cover,
            pic: cole,
            lyrics: lyricArray[3].lyrics,
        },
               {
            name: "Sky So Blue",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/makingmyname/05SkySoBlue.mp3',
            id: 4,
            image: cover,
            pic: cole,
            lyrics: lyricArray[4].lyrics,
        },
               {
            name: "Making My Name",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/makingmyname/06MakingMyName.mp3',
            id: 5,
            image: cover,
            pic: cole,
            lyrics: lyricArray[5].lyrics,
        },
               {
            name: "J-Train",
            artist: "Coleman Lindberg",
            album: 'Making My Name',
            url: 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/makingmyname/07JTrain.mp3',
            id: 6,
            image: cover,
            pic: cole,
            lyrics: lyricArray[6].lyrics,
        },
    ]
}


export default album;