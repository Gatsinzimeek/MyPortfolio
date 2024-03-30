import { Fragment } from "react";
import HeaderDescption from "../../Component/Identification-details/detail";
import ProfileHeader from "../../Component/Profile-Header/Profile";
import About from "../About/About";
import Project from "../Project/Project";
import ContactDetail from "../../Component/contact-Info/contact";
import './home.css'
const Home = () =>{
    return(
        <Fragment>
            <div className="main-header">
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