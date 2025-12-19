


import { Card } from "react-bootstrap";
import './index.css'


export default function GallerySubpage() {


    return (        
    <div className="gallery-subpage-outer" >
      
        <div className="gallery-wrapper">
            <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
        <Card className="gallery-card-style rounded-0  " style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/sixteen.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            <Card className="gallery-card-style rounded-0" style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/nineteen.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <Card className="gallery-card-style rounded-0 " style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/twentyone.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            <Card className="gallery-card-style rounded-0" style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/seven.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
            <Card className="gallery-card-style rounded-0" style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
                <Card.Body >
                    <Card.Img  variant="top" src={"https://rlhgqzuuag32i5so.public.blob.vercel-storage.com/photos/december16_2025/thirteen.jpeg"} />
                    {/* <Card.Title style={{ textAlign: 'center'}}>Music Soulmates</Card.Title> */}
                    
                </Card.Body>
            </Card> 
            <Card className="gallery-card-style rounded-0 " style={{border: `1px solid #62b5b4`, boxShadow: '0 0 0 1px #2787ce'}}>
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