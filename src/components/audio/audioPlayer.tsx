import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import cover from '../../assets/cover2.jpg'
import prev from '../../assets/skip-backward.svg'
import next from '../../assets/skip-forward.svg'
import guitar from '../../assets/cl_gt_only.svg'
import './audio.css'

type Track = {
  name: string;
  author: string;
  album: string;
  url: string;
  id: number;
  image: string;
  color?: string;
}

type AudioPlayerProps = {
  tracks: Track[]
}

export default function AudioPlayer ({ tracks }: AudioPlayerProps) {
  const [current, setCurrent] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
    
   const handlePlayPause = () => {
 
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
   audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);

  };

  const handlePlay = (idx: number) => {
    setCurrent(idx);
    
    setTimeout(() => {
      audioRef.current?.play();
    }, 0);
    } 

    const handleNext = () => {
      setCurrent((prev) => (prev + 1) % tracks.length);
      setTimeout(() => {
      audioRef.current?.play();
    }, 0);

    if (current === tracks.length - 1) {
      setCurrent(0);
    }
    }

        const handlePrev = () => {
      setCurrent((prev) => (prev - 1) % tracks.length);
      setTimeout(() => {
      audioRef.current?.play();
    }, 0);

    }

  return (
    <div className="container">

        <div  className="audio-div">
          
                <Card className="playerCard">
      <Card.Img variant="top" src={tracks[current]?.image} />
      <Card.Body style={{width: '100%'}}>
        <Card.Title style={{ textAlign: 'center'}}>{tracks[current]?.album}</Card.Title>
        <Card.Text style={{ textAlign: 'center'}}>
           
              <audio ref={audioRef} controls src={tracks[current]?.url}>
        Your browser does not support the audio element.
      </audio>
      <Card.Text style={{ textAlign: 'center', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Button variant="light" onClick={handlePrev} style={{ backgroundColor: '#7D7D7D70' }}>
        <img src={prev} alt="Previous" width="20" height="20" />
      </Button>
      <img style={{ height: '50px', borderRadius: '8px', overflow: 'hidden'}} src={guitar}></img>
      {/* <Button variant="light" onClick={handlePlayPause} style={{ marginRight: '10px' }}>
        <img src={play} alt={isPlaying ? "Pause" : "Play"} width="20" height="20" />
      </Button> */}
      
      <Button variant="light" onClick={handleNext} style={{ backgroundColor: '#7D7D7D70'}}>
        <img src={next} alt="Next" width="20" height="20" />
      </Button>
      </Card.Text>
        </Card.Text>
        <Card.Text style={{ textAlign: 'center', fontSize: '1rem'}}>
              Now Playing :
        </Card.Text>
     <Card.Text style={{ textAlign: 'center'}}>
              {tracks[current]?.name}
        </Card.Text>
        
      </Card.Body>

    </Card>

  
</div>

      <div  className="list audio-div" >
        <Card style={{ width: '25rem', backgroundColor: '#f0f0f0', fontFamily: 'Oxanium Medium', height: 'auto' }}>

      <Card.Body >
        
        
           {/* <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {tracks.map((track, idx) => (
          <li key={track.id}>
            <button style={{padding: 0, border: 'none', background: 'none', fontFamily: 'Oxanium Medium', fontSize: '14px' }} onClick={() => handlePlay(idx)}>
             {track.name}
            </button>
          </li>
        ))}
      </ul> */}
      <ListGroup>
          {tracks.map((t, i) => (
            <ListGroup.Item key={t.id} action  onClick={() => handlePlay(i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div >{t.name}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{t.author}</div>
                </div>
                
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
       
       
     
      </Card.Body>

    </Card>


      </div>
    </div>
  )

}
