import { icons } from '../../../assets/assets'
import './notFound.css'



export default function NotFound() {


    return (
        <>
        <div className="nf-outer" >
            <div className="nf-text-div"><span className="nf-text-span">404 Not Found</span></div>
            <div className="nf-img-div"><img className="nf-img" src={icons.notFound} ></img></div>
            <div className="nf-end"><span className="nf-end-span" ></span></div>
        </div>
        </>
    )
}