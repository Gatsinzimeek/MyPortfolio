import AboutDetail from '../About-Info/About-info'
import Profile from '../../Assets/Lap.jpg'
import './About-section.css'
const AboutMe = () =>{
    return(
        <selection className="About-Section">
            <div className='profile'>
                <img src={Profile} alt='profile'/>
            </div>
            <AboutDetail/>
        </selection>
    )
}

export default AboutMe;