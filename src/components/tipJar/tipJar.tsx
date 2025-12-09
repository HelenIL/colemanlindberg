import piggy from '../../assets/piggy-bank-solid-full.svg'
import Card from "react-bootstrap/Card";
import './index.css'


export default function TipJar() {

    return (

        <>
      
        <Card className="tip-jar-card rounded-0" style={{ marginTop: '20px', width: '30rem',  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '10px'  }}>
            <Card.Img style={{width: '75px'}} src={piggy}/>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card.Title style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '15px' }}>Tip Jar</Card.Title>
      <Card.Text>
       <span> If you enjoy the music and would like to support future projects, consider leaving a tip. Your contribution helps cover production costs and fuels creativity. Thank you for your support!</span>
      </Card.Text>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="TMP88X77W4YAQ" />
  <table>
    <tr>
      <td>
        <input type="hidden" name="on0" value="Leave A Special Note!"/>
        Leave A Special Note!
      </td>
    </tr>
    <tr>
      <td>
        <input type="text" name="os0" maxLength={200} />
      </td>
    </tr>
  </table>
  <div style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
  <input type="hidden" name="currency_code" value="USD" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
</div>
</form>
        
            </Card.Body>
        </Card>
        {/* <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '40px'}}>
       <div id="paypal-container-DLQT8CMT9DYBW"></div>
        </div> */}
        </>
    )
}