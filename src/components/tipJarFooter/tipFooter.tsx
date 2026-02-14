import { useLocation } from 'react-router-dom';
import type { CSSProperties } from "react";
import './footer.css';

const colors: Record<string, string> = {
    "owntheview": "#74c932",
    "afewthingsibelieve": "#c5c5d3",
    "skylines": "#f8f5a7",
    "makingmyname": "#dca58f",
    "boys": "#9284f1",
    "home": "#2698c7"
}


export default function TipJarFooter() {

 const location = useLocation();


 const pathColor = () => {
   const foundColor = Object.keys(colors).find((el) => location.pathname.includes(el));
   return foundColor ? colors[foundColor] : colors['home'];
 }

    const dynamicStyle: CSSProperties = {
 
        color: pathColor(),
        fontWeight: 'bold',
        textDecoration: 'underline',
        textDecorationColor: pathColor(),
        
  };



    return (

        <div style={{ backgroundColor: '#494949', width: '100%',  display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '12px', marginTop: '10px' }}>
                Love the music? Want to support future projects? Consider leaving a <a  href="/merch"> <span style={dynamicStyle}>tip</span></a>! 
            </p>
        </div>
    )
}