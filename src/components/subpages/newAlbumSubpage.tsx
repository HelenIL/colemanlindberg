import { useRef, useState } from 'react';
import cover from '../../assets/album_cover_idea2.jpg'
import prev from '../../assets/skip-backward.svg'
import next from '../../assets/skip-forward.svg'
import guitar from '../../assets/cl_gt_only.svg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import tracks from '../../albums/circus/tracklist';



export default function NewAlbumSubpage() {
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

        <div style={{marginRight: '30px', marginLeft: '30px'}}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
<Card style={{ width: '28rem'}}>
            <Card.Img src={cover} />
       
            </Card>
            </div>
            
            <div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <Card style={{ width: '28rem', marginTop: '20px', marginBottom: '40px',  display: 'flex', justifyContent: 'center' }}>
    <Card.Body>
        <Card.Text style={{ textAlign: 'center', fontSize: '1rem', color: 'gray'}}>
              Now Playing :
        </Card.Text>
     <Card.Text style={{ textAlign: 'center'}}>
              {tracks[current]?.name}
        </Card.Text>
       
        <Card.Text style={{ textAlign: 'center', marginTop: '10px'}}>
           
              <audio ref={audioRef} controls src={tracks[current]?.url}>
        Your browser does not support the audio element.
      </audio>
      <Card.Text style={{ textAlign: 'center', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Button variant="light" className="rounded-pill" onClick={handlePrev} disabled={tracks[current].id === 0} style={{ backgroundColor: '#7D7D7D70' }}>
        <img src={prev} alt="Previous" width="20" height="20" />
      </Button>
      <img style={{ height: '50px', borderRadius: '8px', overflow: 'hidden'}} src={guitar}></img>

      <Button variant="light" className="rounded-pill" onClick={handleNext} style={{ backgroundColor: '#7D7D7D70', border: 'none'}}>
        <img src={next} alt="Next" width="20" height="20" />
      </Button>
      </Card.Text>
        </Card.Text>
        
        <ListGroup>
          {tracks.map((t, i) => (
            <ListGroup.Item key={t.id} action  onClick={() => handlePlay(i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div >{t.name}</div>
                  
                </div>
                
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    )
}