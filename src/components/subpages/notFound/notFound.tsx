import icon from '../../../assets/404_image_line.png'
import './notFound.css'



export default function NotFound() {


    return (
        <>
        <div className="nf-outer" >
            <div className="nf-text-div"><span className="nf-text-span">404 Not Found</span></div>
            <div className="nf-img-div"><img className="nf-img" src={icon} ></img></div>
            <div className="nf-end"><span className="nf-end-span" ></span></div>
        </div>
        </>
    )
}