import Spinner from 'react-bootstrap/Spinner'
import { icons } from '../../assets/assets';
import './loading.css'



export default function Loading() {

  
  return (

    <div className="img-cont">
      <div><img src={icons.guitar} className="image"></img></div>
      <div><Spinner animation="border" variant="secondary" className="spinner"/></div>
       
    </div>
  );
}
