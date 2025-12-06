import logo from "../../assets/cl_gt_only.svg"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'



export default function Header () {

    return (
      <Navbar collapseOnSelect expand="lg" className="outerHeader" style={{backgroundColor: 'rgb(94, 94, 94, .45)'}}>


          <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{}}/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center "  >
          <Nav id="txt" className="justify-content-center header" activeKey="/">
           
        <Nav.Item className="--bs-gray-dark">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Albums" id="collapsible-nav-dropdown">
              <NavDropdown.Item id="otv" href="/albums/owntheview">Own The View</NavDropdown.Item>
              <NavDropdown.Item id="mmn" href="/albums/makingmyname" >
                Making My Name
              </NavDropdown.Item>
              <NavDropdown.Item id="sky" href="/albums/skylines" >
                Skylines
              </NavDropdown.Item>
              <NavDropdown.Item id="boys" href="/albums/boys" >
                Boys
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="/albums/thecircusofthegrieving" >
                The Circus of the Grieving
              </NavDropdown.Item> */}
            </NavDropdown>
             <Navbar.Brand ><img className="d-none d-md-block" src={logo} alt="logo" width="84" height='50px' style={{ }}  /></Navbar.Brand>
        
       
            <Nav.Item className="--bs-gray-dark">
          <Nav.Link href="/about">Shows</Nav.Link>
        </Nav.Item>
         <Nav.Item className="--bs-gray-dark">
          <Nav.Link href="/contact">Merch</Nav.Link>
        </Nav.Item>
        <Nav.Link href="/test">Test</Nav.Link>
      </Nav>
      </Navbar.Collapse>
 
      </Navbar>
    )
}