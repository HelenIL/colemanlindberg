
import Card from "react-bootstrap/Card";
import './index.css'


export default function ShowsSubPage() {



    return (
        <div className="shows-outer-wrapper">
        <div className="shows-header-wrapper">
        <p><span className="shows-header-span">Upcoming Shows</span></p>
        </div>
        <div className="shows-card-wrapper">
        <Card className="shows-card" >
           
      <Card.Body>
        <Card.Title><span className="shows-header-span">No Upcoming Shows</span></Card.Title>
        <Card.Subtitle className="mb-2">Check back soon!</Card.Subtitle>
    
   
      </Card.Body>
    </Card>
        </div>
        
        </div>
    )
}