import logo from "../../assets/cl_gt_only.svg"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header () {

    return (

          <Nav id="txt" className="justify-content-center header"  activeKey="/">
           
        <Nav.Item className="--bs-gray-dark">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Albums" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/albums/owntheview">Own The View</NavDropdown.Item>
              <NavDropdown.Item href="/albums/makingmyname">
                Making My Name
              </NavDropdown.Item>
            </NavDropdown>
           <img src={logo} alt="logo" width="90" height='60px' style={{ marginTop: '.5rem'}}  />
        
       
            <Nav.Item className="--bs-gray-dark">
          <Nav.Link href="/about">Shows</Nav.Link>
        </Nav.Item>
         <Nav.Item className="--bs-gray-dark">
          <Nav.Link href="/contact">Merch</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}