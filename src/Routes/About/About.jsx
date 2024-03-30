import AboutMe from "../../Component/About-section/About-section";
import dot from '../../Assets/dots-light.svg'
import './about.css'
const About = () =>{
    return(
        <section className="about-container">
            <h2 className="about-title"><img src={dot} alt="" /> About Me</h2>
            <AboutMe/>
        </section>
    );
};

export default About;