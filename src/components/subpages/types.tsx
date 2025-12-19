

export type Track = {
  track: string;
  url: string;
  downloadURL: string;
  id: number;
  lyrics: string;
};

export type Album = {
  artist: string;
  album: string;
  background: string;
  cover: string;
  featured: string;
  colorPrimary: string;
  rgbColor: string;
  colorSecondary: string;
  about?: string;
  tracks: Track[]
}
