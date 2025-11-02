import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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
  tracks: Track[];
  isTrue?: boolean;
}

export default function AudioPlayer ({ tracks }: AudioPlayerProps) {
  const [current, setCurrent] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
    
  //  const handlePlayPause = () => {
 
  //   if (isPlaying) {
  //     audioRef.current?.pause();
  //   } else {
  //  audioRef.current?.play();
  //   }
  //   setIsPlaying(!isPlaying);

  // };

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
   

  <div style={{}} className=" cont">

    

        <div  className="playerDiv audio-div">
          
                <Card className="cardStyle border-0 opacity-75">
      <Card.Img variant="top" src={tracks[current]?.image} />
      <Card.Body>
        <Card.Subtitle style={{ textAlign: 'center'}}>{tracks[current]?.album}</Card.Subtitle>
        <Card.Text style={{ textAlign: 'center', marginTop: '10px'}}>
           
              <audio ref={audioRef} controls src={tracks[current]?.url}>
        Your browser does not support the audio element.
      </audio>
      <Card.Text style={{ textAlign: 'center', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Button variant="light"  onClick={handlePrev} disabled={tracks[current].id === 0} style={{ backgroundColor: '#7D7D7D70' }}>
        <img src={prev} alt="Previous" width="20" height="20" />
      </Button>
      <img style={{ height: '50px', borderRadius: '8px', overflow: 'hidden'}} src={guitar}></img>

      
      <Button variant="light" className="rounded-pill"  onClick={handleNext} style={{ backgroundColor: '#7D7D7D70'}}>
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
        <Card.Body style={{ flex: 1}}>

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
      </Card.Body>

    </Card>

  
</div>

     
      

      <div className="blurb-div" >
        <div className="mb-3" style={{width: '100%'}}>
        <Card className="opacity-75" >
            <Card.Body style={{ flex: 1}}>
                <Card.Text style={{ fontWeight: 'bold'}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies ac ante ut placerat. Vestibulum magna dui, vulputate non volutpat vel, aliquet ac est. Etiam vestibulum metus at dui rhoncus, quis varius mi vulputate. Aliquam rutrum elementum sagittis. Sed eros est, porttitor sed magna lacinia, cursus viverra dui. Proin condimentum ac nisi non semper. Nulla sed magna vitae urna scelerisque laoreet eu a enim. In vel convallis libero. Suspendisse vel eros in ex tincidunt mattis quis eget mauris. Sed quis augue quis dolor pulvinar malesuada eget ac lectus. In congue ornare nulla, id mattis purus dignissim ut.
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
      </div>

            
    </div>


  )

}
