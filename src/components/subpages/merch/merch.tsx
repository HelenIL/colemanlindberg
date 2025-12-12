import mmn from "../../../assets/makingmyname_cover.jpg";
import skylines from "../../../assets/skylines_cover.jpg";
import "./index.css";
import Card from "react-bootstrap/Card";
import TipJar from "../../tipJar/tipJar";

export default function MerchSubPage() {
  return (
    <div className="merch-page-outer">
        {/* header  */}
        <div className="merch-header" >
      <p><span className="merch-header-span">Merchandise</span></p>
      </div>
      <div className="merch-sub-header">
        <p className="merch-sub-header-p"><span className="merch-sub-header-span">CDs are name your own price, pay what you're able.</span></p>
      </div>
      <div className="merch-sub-sub-header">
        <p><span className="merch-sub-sub-span">Any amount is appreciated.</span></p>
      </div>
      {/* paypal cards */}
    <div className="paypal-outer">
      <div style={{ marginTop: "20px", }}>
        <Card
        className="opacity-75 rounded-0"
          style={{
            width: "18rem",
            margin: "0 auto",
            height: "auto",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "10px",
            
          }}
        >
          <Card.Img variant="top" src={mmn} />
          <Card.Text style={{ textAlign: "center", marginTop: "10px", fontWeight: 'bold' }}>
            Maiking My Name (CD)
          </Card.Text>
          <Card.Body style={{ display: "flex", justifyContent: "center" }}>
        
              <div style={{ textAlign: "center" }}>
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="SBP2EZ5TSL79L"
                  />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Buy Now"
                  />
                </form>
              </div>
           
          </Card.Body>
        </Card>
        </div>
        <div style={{ marginTop: "20px" }}>
        <Card
        className="opacity-75 rounded-0"
          style={{
            width: "18rem",
            margin: "0 auto",
            height: "auto",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "10px",
          }}
        >
          <Card.Img variant="top" src={skylines} />
          <Card.Text style={{ textAlign: "center", marginTop: "10px", fontWeight: 'bold' }}>
            Skylines (CD)
          </Card.Text>
          <Card.Body
            style={{
              display: "flex",
              justifyContent: "center",
       
            }}
          >
            <div style={{ textAlign: "center" }}>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="95WJRMAWS9UBY"
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Buy Now"
                />
              </form>
            </div>
          </Card.Body>
        </Card>

        </div>
 
       
      </div>
                     <div style={{direction: 'ltr', marginTop: '40px', marginBottom: '40px', display: 'flex', justifyContent: 'center'}}>
            <TipJar/>
        </div>
    </div>
  );
}
