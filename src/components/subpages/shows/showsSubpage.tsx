
import Card from "react-bootstrap/Card";
import cover from '../../../albums/circus/tracklist'
import './index.css'


export default function ShowsSubPage() {



    return (
        <div className="shows-outer-wrapper">
        <div className="shows-header-wrapper">
        <p><span className="shows-header-span">Upcoming Shows</span></p>
        </div>
        <div className="shows-card-wrapper">
        <Card className="shows-card" >
            <Card.Img variant="top" src={cover.cover} />
      <Card.Body>
        <Card.Title><span className="shows-header-span">New Album Release</span></Card.Title>
        <Card.Subtitle className="mb-2">December 18th</Card.Subtitle>
        <Card.Text>
          Swede Hollow Cafe
        </Card.Text>
        <Card.Text>
          Doors @ 5PM - Music @ 6PM
        </Card.Text>
   
      </Card.Body>
    </Card>
        </div>
        
        </div>
    )
}