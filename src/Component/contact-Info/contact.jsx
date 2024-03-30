import Light from '../../Assets/contact-light.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from './input/input';
import Button from '../Button/Button'
import './contact.css'
const ContactDetail = () =>{
    return(
       <section className="contact-Info">
            <h1>CONTACT ME</h1>
            <div className="contact-presentation">
                <div className="contact-descrption">
                    <h1>Let's Work  Together.</h1><br />
                    <p>I really wait Your message. <br /> I am ready to join your team to change world</p>
                </div>
                <div className="visual-contact">
                    <img src={Light} alt="light-contact-visual" />
                </div>
            </div>
            <div className="form-info">
                <div className="info">
                    <FontAwesomeIcon icon='location-dot' className='Icon'/>  <span>Kigali, Rwanda</span><br />
                    <FontAwesomeIcon icon='envelope' className='Icon'/>  <span>hackergastinzi@gmail.com</span><br />
                    <FontAwesomeIcon icon='phone' className='Icon'/>   <span>+250 781 987 858</span><br />
                </div>
                <div className="form">
                    <Input type='text' placeholder='Name'/><br />
                    <Input type='email' placeholder='Message Me'/><br />
                    <textarea placeholder='Message Me'></textarea><br />
                    <Button OtherClassName='normal'>Let's Talk</Button>
                </div>
            </div>
       </section> 
    )
}

export default ContactDetail;