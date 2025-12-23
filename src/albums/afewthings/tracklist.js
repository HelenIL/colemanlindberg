import { about, lyrics } from "./extras"

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;
const audioBlob = 'https://rlhgqzuuag32i5so.public.blob.vercel-storage.com'
const backgroundBlob ='https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/backgrounds'
const featuredBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/featured'
const coverBlob = 'https://9unmpwrzsbebezg2.public.blob.vercel-storage.com/covers'


const album = {

artist: 'Winter Machine',
album: 'A Few Things I Believe',
cover: `${coverBlob}/afewthingsibelieveCover.jpg`,
featured: `${featuredBlob}/afewthingsFeature.jpg`,
background: `${backgroundBlob}/afewthingsBackground.jpg`,
colorPrimary: '	#c5c5d3',
rgbColor: '197, 197, 212',
colorSecondary: '	#c5c5d3',
fontColor: '',
about: about,
tracks: [
    {
        track: 'Going Through',
        url: `${audioBlob}/afewthingsibelieve/Going%20Through.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Going%20Through.mp3?download=1`,
        id: 0,
        lyrics: lyricArray[0].lyrics
    },
    {
        track: 'Larger Than Life',
        url: `${audioBlob}/afewthingsibelieve/Larger%20Than%20Life.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Larger%20Than%20Life.mp3?download=1`,
        id: 1,
        lyrics: lyricArray[1].lyrics
    },
    {
        track: 'Coney Island',
        url: `${audioBlob}/afewthingsibelieve/Coney%20Island.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Coney%20Island.mp3?download=1`,
        id: 2,
        lyrics: lyricArray[2].lyrics
    },
    {
        track: 'Possibly Tomorrow',
        url: `${audioBlob}/afewthingsibelieve/Possibly%20Tomorrow.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Possibly%20Tomorrow.mp3?download=1`,
        id: 3,
        lyrics: lyricArray[3].lyrics
    },
    {
        track: 'Two Perfect Hours',
        url: `${audioBlob}/afewthingsibelieve/Two%20Perfect%20Hours.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Two%20Perfect%20Hours.mp3?download=1`,
        id: 4,
        lyrics: lyricArray[4].lyrics
    },
    {
        track: 'Play Nintendo',
        url: `${audioBlob}/afewthingsibelieve/Play%20Nintendo.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Play%20Nintendo.mp3?download=1`,
        id: 5,
        lyrics: lyricArray[5].lyrics
    },
    {
        track: 'Brave the Night',
        url: `${audioBlob}/afewthingsibelieve/Brave%20the%20Night.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Brave%20the%20Night.mp3?download=1`,
        id: 6,
        lyrics: lyricArray[6].lyrics
    },
    {
        track: '500 Felonies',
        url: `${audioBlob}/afewthingsibelieve/500%20Felonies.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/500%20Felonies.mp3?download=1`,
        id: 7,
        lyrics: lyricArray[7].lyrics
    },
    {
        track: 'Atom Split',
        url: `${audioBlob}/afewthingsibelieve/Atom%20Split.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Atom%20Split.mp3?download=1`,
        id: 8,
        lyrics: lyricArray[8].lyrics
    },
    {
        track: 'Harriet Summer',
        url: `${audioBlob}/afewthingsibelieve/Harriet%20Summer.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Harriet%20Summer.mp3?download=1`,
        id: 9,
        lyrics: lyricArray[9].lyrics
    },
    {
        track: `She's a...`,
        url: `${audioBlob}/afewthingsibelieve/She%27s%20a....mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/She%27s%20a....mp3?download=1`,
        id: 10,
        lyrics: lyricArray[10].lyrics
    },
    {
        track: 'My Own Hero',
        url: `${audioBlob}/afewthingsibelieve/My%20Own%20Hero.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/My%20Own%20Hero.mp3?download=1`,
        id: 11,
        lyrics: lyricArray[11].lyrics
    },
    {
        track: 'Rhythm of the Underground',
        url: `${audioBlob}/afewthingsibelieve/Rhythm%20of%20the%20Underground.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Rhythm%20of%20the%20Underground.mp3?download=1`,
        id: 12,
        lyrics: lyricArray[12].lyrics
    },
    {
        track: 'Slow News Day (hiddden track)',
        url: `${audioBlob}/afewthingsibelieve/Slow%20News%20Day.mp3`,
        downloadURL: `${audioBlob}/afewthingsibelieve/Slow%20News%20Day.mp3?download=1`,
        id: 12,
        lyrics: lyricArray[13].lyrics
    },
]
}


export default album;