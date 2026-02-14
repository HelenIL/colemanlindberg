import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";



export default function Footer() {


    return (
        <div style={{position: 'relative', bottom: '0', width: '100%', left: '0', height: 'auto'}}>
            
              <Navbar style={{backgroundColor: 'rgb(94, 94, 94, .45)', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                
                <div style={{backgroundColor: 'rgb(94, 94, 94, .45)', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
             <p style={{fontFamily: 'Michroma', marginTop: '10px', marginBottom: '10px'}}>© 2025 Dash Web Design</p>
          </div>
        </Navbar>
        </div>
      
    )
}