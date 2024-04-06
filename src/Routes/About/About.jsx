import AboutMe from "../../Component/About-section/About-section";
import dot from '../../Assets/dots-light.svg'
import { ColorModeContext } from "../../Context/Mode/ColorMode";
import { useContext } from "react";
import './about.css'
const About = () =>{
    const {Color} = useContext(ColorModeContext);
    return(
        <section className={`about-container ${Color === 'normal' ? 'about-normal' : 'dark-mode'}`}>
            <h2 className="about-title"><img src={dot} alt="" /> About Me</h2>
            <AboutMe/>
        </section>
    );
};

export default About;