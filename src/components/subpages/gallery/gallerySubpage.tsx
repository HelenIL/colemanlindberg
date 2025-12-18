


import { Card } from "react-bootstrap";
import './index.css'
import circus from '../../../albums/circus/tracklist'
import boys from '../../../albums/boys/tracklist'

export default function GallerySubpage() {


console.log(circus.color)
    return (        
    <div className="gallery-subpage-outer" >
      
        <div className="gallery-wrapper">
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
        <Card className="gallery-card-style rounded-0  " style={{border: `2px solid ${circus.color}`}}>
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/sixteen.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            <Card className="gallery-card-style rounded-0" style={{border: `2px solid ${boys.color}`}}>
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/nineteen.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            <Card className="gallery-card-style rounded-0 border-0">
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/twentyone.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            <Card className="gallery-card-style rounded-0 border-0">
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/seven.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            <Card className="gallery-card-style rounded-0 border-0">
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/thirteen.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            <Card className="gallery-card-style rounded-0 border-0">
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/fourteen.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            </div>
        </div>
        {/* <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            <Card style={{width: '30rem'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/nineteen.jpeg"} />
                    <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title>
                    
                </Card.Body>
            </Card> 
        </div> */}
    </div>
    );
}