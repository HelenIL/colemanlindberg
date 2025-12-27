import { about, lyrics } from "./extras"
import { albumZones } from '../../assets/assets.js'

const lyricArray = Array.isArray(lyrics) && typeof lyrics[0] === 'string' ? lyrics.map(s => JSON.parse(s)) : lyrics;



const album = {

artist: 'Winter Machine',
album: 'A Few Things I Believe',
cover: `${albumZones.cover}/afewthingsibelieveCover.jpg`,
featured: `${albumZones.featured}/afewthingsFeature.jpg`,
background: `${albumZones.background}/afewthingsBackground.jpg`,
colorPrimary: '	#c5c5d3',
rgbColor: '197, 197, 212',
colorSecondary: '	#c5c5d3',
fontColor: '',
about: about,
tracks: [
    {
        track: 'Going Through',
        url: `${albumZones.audio}/afewthingsibelieve/Going%20Through.mp3`,
        id: 0,
        lyrics: lyricArray[0].lyrics
    },
    {
        track: 'Larger Than Life',
        url: `${albumZones.audio}/afewthingsibelieve/Larger%20Than%20Life.mp3`,
        id: 1,
        lyrics: lyricArray[1].lyrics
    },
    {
        track: 'Coney Island',
        url: `${albumZones.audio}/afewthingsibelieve/Coney%20Island.mp3`,
        id: 2,
        lyrics: lyricArray[2].lyrics
    },
    {
        track: 'Possibly Tomorrow',
        url: `${albumZones.audio}/afewthingsibelieve/Possibly%20Tomorrow.mp3`,
        id: 3,
        lyrics: lyricArray[3].lyrics
    },
    {
        track: 'Two Perfect Hours',
        url: `${albumZones.audio}/afewthingsibelieve/Two%20Perfect%20Hours.mp3`,
        id: 4,
        lyrics: lyricArray[4].lyrics
    },
    {
        track: 'Play Nintendo',
        url: `${albumZones.audio}/afewthingsibelieve/Play%20Nintendo.mp3`,
        id: 5,
        lyrics: lyricArray[5].lyrics
    },
    {
        track: 'Brave the Night',
        url: `${albumZones.audio}/afewthingsibelieve/Brave%20the%20Night.mp3`,
        id: 6,
        lyrics: lyricArray[6].lyrics
    },
    {
        track: '500 Felonies',
        url: `${albumZones.audio}/afewthingsibelieve/500%20Felonies.mp3`,
        id: 7,
        lyrics: lyricArray[7].lyrics
    },
    {
        track: 'Atom Split',
        url: `${albumZones.audio}/afewthingsibelieve/Atom%20Split.mp3`,
        id: 8,
        lyrics: lyricArray[8].lyrics
    },
    {
        track: 'Harriet Summer',
        url: `${albumZones.audio}/afewthingsibelieve/Harriet%20Summer.mp3`,
        id: 9,
        lyrics: lyricArray[9].lyrics
    },
    {
        track: `She's a...`,
        url: `${albumZones.audio}/afewthingsibelieve/She%27s%20a....mp3`,
        id: 10,
        lyrics: lyricArray[10].lyrics
    },
    {
        track: 'My Own Hero',
        url: `${albumZones.audio}/afewthingsibelieve/My%20Own%20Hero.mp3`,
        id: 11,
        lyrics: lyricArray[11].lyrics
    },
    {
        track: 'Rhythm of the Underground',
        url: `${albumZones.audio}/afewthingsibelieve/Rhythm%20of%20the%20Underground.mp3`,
        id: 12,
        lyrics: lyricArray[12].lyrics
    },
    {
        track: 'Slow News Day (hiddden track)',
        url: `${albumZones.audio}/afewthingsibelieve/Slow%20News%20Day.mp3`,
        id: 12,
        lyrics: lyricArray[13].lyrics
    },
]
}


export default album;