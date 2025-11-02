import logo from "../../assets/cl_gt_only.svg"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { prefetchHomeDebounced, prefetchOwnTheViewDebounced, prefetchBoysDebounced, prefetchCircusDebounced } from '../../prefetch';


export default function Header () {

    return (
      <Navbar collapseOnSelect expand="lg" className="outerHeader" style={{backgroundColor: '#7D7D7D', width: '100%'}}>


          <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{}}/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center "  >
          <Nav id="txt" className="justify-content-center header" activeKey="/">
           
        <Nav.Item className="--bs-gray-dark">
          <Nav.Link href="/" onMouseEnter={prefetchHomeDebounced}>Home</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Albums" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/albums/owntheview" onMouseEnter={prefetchOwnTheViewDebounced}>Own The View</NavDropdown.Item>
              <NavDropdown.Item href="/albums/boys" onMouseEnter={prefetchBoysDebounced}>
                Boys
              </NavDropdown.Item>
              <NavDropdown.Item href="/albums/thecircusofthegrieving" onMouseEnter={prefetchCircusDebounced}>
                The Circus of the Grieving
              </NavDropdown.Item>
            </NavDropdown>
             <Navbar.Brand ><img className="d-none d-md-block" src={logo} alt="logo" width="84" height='50px' style={{ }}  /></Navbar.Brand>
        
       
            <Nav.Item className="--bs-gray-dark">
          <Nav.Link href="/about">Shows</Nav.Link>
        </Nav.Item>
         <Nav.Item className="--bs-gray-dark">
          <Nav.Link href="/contact">Merch</Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar.Collapse>
 
      </Navbar>
    )
}