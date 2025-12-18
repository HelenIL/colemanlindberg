

export type Track = {
  name: string;
  artist: string;
  album: string;
  url: string;
  id: number;
  image: string;
  pic: string;
  lyrics: string;
};

export type Album = {
  album: string;
  cover: string;
  color: string;
  rgbColor: string;
  colorII: string;
  pic: string;
  blurbs?: string;
  about?: string;
  tracks: Track[]
}
