import icon from '../../assets/404_image_line.png'




export default function NotFound() {


    return (
        <>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px'}}>
            <div style={{ marginBottom: '3px'}}><span style={{ display: 'inline-block', width: '200px',  borderBottom: '3px solid black', fontWeight: 'bold', fontSize: '18px', fontFamily: 'Michroma'}}>404 Not Found</span></div>
            <div style={{ padding: 0, marginTop: '2px'}}><img src={icon} height={300}></img></div>
            <div style={{ marginTop: '15px'}}><span style={{ display: 'inline-block', width: '100px', height: 0, borderBottom: '3px solid black', fontWeight: 'bold'}}></span></div>
        </div>
        </>
    )
}