import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import headshotOne from '../../assets/headshot_bw_1.jpg'
import headshotTwo from '../../assets/headshot_bw_2.jpg';
import headshotThree from '../../assets/headshot_bw_3.jpg';



export default function Banner() {

    return (
<>
<Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={headshotOne} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={headshotTwo} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={headshotThree} thumbnail />
        </Col>
      </Row>
    </Container>
        
</>

    )
}