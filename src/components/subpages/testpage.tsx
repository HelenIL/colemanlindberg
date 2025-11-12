import Nav from 'react-bootstrap/Nav';
import OwnTheViewSubpage from './owntheviewSubpage';
import CircusSubPage from './circusSubpage';



export default function TestPage () {





    return (
        <>
<Nav defaultActiveKey="/home" className="flex-column" style={{backgroundColor: '#7d7d7d', height: '100vh', paddingTop: '20px', width: '200px'}}>
      <Nav.Link href="/albums/owntheview">Own The View</Nav.Link>
      <Nav.Link eventKey="link-1">Boys</Nav.Link>
      <Nav.Link eventKey="link-2">The Circus of the Grieving</Nav.Link>
      <Nav.Link eventKey="disabled">
       Making My Name
      </Nav.Link>
    </Nav>
        </>
    )
}