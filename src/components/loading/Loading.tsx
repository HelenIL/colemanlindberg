import Spinner from 'react-bootstrap/Spinner'
import icon from '../../assets/cl_gt_only.svg'
import './loading.css'



export default function Loading() {

  
  return (

    <div className="img-cont">
      <div><img src={icon} className="image"></img></div>
      <div><Spinner animation="border" variant="secondary" className="spinner"/></div>
       
    </div>
  );
}
