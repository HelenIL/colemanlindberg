import "./index.css";
import Card from "react-bootstrap/Card";
import mmn from "../../assets/makingmyname_cover.jpg";
import skylines from "../../assets/skylines_cover.jpg";
import MerchSubPage from "../../components/subpages/merch/merch";

export default function MerchPage() {
  return (
    <div style={{display: 'flex', alignItems: 'center', backgroundColor: '#494949', width: '100vw'}}>
        <MerchSubPage />
    
    </div>
  );
}
