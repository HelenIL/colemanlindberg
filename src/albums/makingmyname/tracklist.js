import { lyrics, about } from './extras.js'


const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;
const audioBlob = 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com'
const backgroundBlob ='https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/backgrounds'
const featuredBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/featured'
const coverBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/covers'
    
const album = {
    artist: "Coleman Lindberg",
    album: 'Making My Name',
    cover: `${coverBlob}/makingmynameCover.jpg`,
    background: `${backgroundBlob}/makingmynameBackground.jpeg`,
    colorPrimary: '#dca58f',
    rgbColor: '220, 165, 143',
    colorSecondary: '#dea88e',
    fontColor: 'white',
    featured: `${featuredBlob}/makingmynameFeature.jpg`,
    about: about,
    tracks: [
        {
            track: "Wounded Winter",
            url: `${audioBlob}/makingmyname/Wounded%20Winter.mp3`,
            downloadURL: `${audioBlob}/makingmyname/Wounded%20Winter.mp3?download=1`,
            id: 0,
            lyrics: lyricArray[0].lyrics,
        },
               {
            track: "Crawling Home",
            url: `${audioBlob}/makingmyname/Crawling%20Home.mp3`,
            downloadURL: `${audioBlob}/makingmyname/Crawling%20Home.mp3?download=1`,
            id: 1,
            lyrics: lyricArray[1].lyrics,
        },
               {
            track: "Closer on the Corners",
            url: `${audioBlob}/makingmyname/Closer%20on%20the%20Corners.mp3`,
            downloadURL: `${audioBlob}/makingmyname/Closer%20on%20the%20Corners.mp3?download=1`,
            id: 2,
            lyrics: lyricArray[2].lyrics,
        },
               {
            track: "Hard Times, Come Again No More",
            url: `${audioBlob}/makingmyname/Hard%20Times%2C%20Come%20Again%20No%20More.mp3`,
            downloadURL: `${audioBlob}/makingmyname/Hard%20Times%2C%20Come%20Again%20No%20More.mp3?download=1`,
            id: 3,
            lyrics: lyricArray[3].lyrics,
        },
               {
            track: "Sky So Blue",
            url: `${audioBlob}/makingmyname/Sky%20So%20Blue.mp3`,
            downloadURL: `${audioBlob}/makingmyname/Sky%20So%20Blue.mp3?download=1`,
            id: 4,
            lyrics: lyricArray[4].lyrics,
        },
               {
            track: "Making My Name",
            url: `${audioBlob}/makingmyname/Making%20My%20Name.mp3`,
            downloadURL: `${audioBlob}/makingmyname/Making%20My%20Name.mp3?download=1`,
            id: 5,
            lyrics: lyricArray[5].lyrics,
        },
               {
            track: "J-Train",
            url: `${audioBlob}/makingmyname/J-Train.mp3`,
            downloadURL: `${audioBlob}/makingmyname/J-Train.mp3?download=1`,
            id: 6,
            lyrics: lyricArray[6].lyrics,
        },
    ]
}


export default album;