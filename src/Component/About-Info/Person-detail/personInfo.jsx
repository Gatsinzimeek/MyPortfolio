import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const PersonDetail = () =>{
    return(
        <div className="pers-detail">
            <h2>Who am I</h2>
            <p>I am Ernest who passioned in world tech and specialized <br/> In Web Development and UI & UX Design, Full stack </p>
            <div className="person-info">
                <div className="peron-location">
                    <FontAwesomeIcon icon='location-dot' className='icon'/>  <span>Kigali, Rwanda</span><br />
                    <FontAwesomeIcon icon='envelope'  className='icon'/>  <span>hackergastinzi@gmail.com</span><br />
                    <FontAwesomeIcon icon='graduation-cap' className='icon' />   <span>Under Graduates University</span><br />
                    <FontAwesomeIcon icon='phone'  className='icon'/>   <span>+250 781 987 858</span><br />
                </div>
                <h4>LANGUAGES</h4>
                <p>English, Kinyarwanda</p>
            </div>
        </div>
    )
}

export default PersonDetail;