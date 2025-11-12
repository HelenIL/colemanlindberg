import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import headshotOne from '../../assets/headshot_bw_1.jpg'
import headshotTwo from '../../assets/headshot_bw_2.jpg';
import headshotThree from '../../assets/headshot_bw_3.jpg';
import './banner.css'
import { Card } from 'react-bootstrap';


export default function Banner() {

    return (
<>


    <div className="ima-cont">

      <div className="ima-div">
        <img className="ima img-fluid" src={headshotOne} />
      </div>
      <div className="ima-div">
        {/* <img className="ima img-fluid" src={headshotTwo} /> */}
         <img className="ima img-fluid" src={headshotOne} />
      </div>
      <div className="ima-div">
        {/* <img className="ima img-fluid" src={headshotThree}  /> */}
         <img className="ima img-fluid" src={headshotOne} />
      </div>
    </div>
        
</>

    )
}