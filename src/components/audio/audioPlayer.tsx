import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import cover from '../../assets/cover2.jpg'
import prev from '../../assets/skip-backward.svg'
import next from '../../assets/skip-forward.svg'
import guitar from '../../assets/cl_gt_only.svg'

type Track = {
  name: string;
  author: string;
  url: string;
  id: number;
  image: string;
  color?: string;
}

type AudioPlayerProps = {
  tracks: Track[]
}

export default function AudioPlayer ({ tracks }: AudioPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
 const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  console.log(tracks)
console.log(currentIndex)

  const handlePlayPause = (i: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    const clicked = tracks[i];
    if (!clicked) return;


    if (i === currentIndex) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {

        if (audio.src !== clicked.url) audio.src = clicked.url;
        audio.play().catch(e => console.error('Play failed', e));
        setIsPlaying(true);
      }
      return;
    }

    if (audio.src !== clicked.url) audio.src = clicked.url;
    setCurrentIndex(i);
    audio.play().catch(e => console.error('Play failed', e));
    setIsPlaying(true);
  };




  return (
    <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
      <Card style={{ width: 300, height: '35rem'  }}>
        <Card.Img variant="top" src={tracks[currentIndex].image ?? cover} />
        <Card.Body>
          <Card.Title>{tracks[currentIndex].name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{tracks[currentIndex].author}</Card.Subtitle>
          
          <audio ref={audioRef} style={{ width: '100%', marginTop: 12 }} controls />
          <Card.Text>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, alignItems: 'center'  }}>
            <Button variant="secondary" style={{ border: 'none', borderRadius: '20px', height: '40px', width: "80px"}}  disabled={currentIndex === 0}><img style={{ marginRight: "5px"}} src={prev}></img>Prev</Button>
            <img src={guitar} style={{ height: '60px'}}></img>
           
           <Button variant="secondary" style={{ border: 'none', borderRadius: '20px', height: '40px', width: "80px"}}>Next<img style={{ marginLeft: "5px"}} src={next}></img></Button>
          </div>
          </Card.Text>
        </Card.Body>
      </Card>

      <div style={{ flex: 1, maxWidth: 420 }}>
        <ListGroup>
          {tracks.map((t, i) => (
            <ListGroup.Item key={t.id} action  onClick={() => handlePlayPause(i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{t.author}</div>
                </div>
                
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  )

}
