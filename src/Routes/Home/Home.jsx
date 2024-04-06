import { Fragment } from "react";
import HeaderDescption from "../../Component/Identification-details/detail";
import ProfileHeader from "../../Component/Profile-Header/Profile";
import About from "../About/About";
import Project from "../Project/Project";
import { useContext } from "react";
import ContactDetail from "../../Component/contact-Info/contact";
import { ColorModeContext } from "../../Context/Mode/ColorMode";
import './home.css'
const Home = () =>{
    
    const {Color} = useContext(ColorModeContext);
    return(
        <Fragment>
            <div className={`main-header ${Color === 'normal' ? 'main-header-normal' : 'dark-mode'}`}>
                <HeaderDescption/>
                <ProfileHeader/>
            </div>
            <About/>
            <Project/>
            <ContactDetail/>
        </Fragment>
    )
}

export default Home;