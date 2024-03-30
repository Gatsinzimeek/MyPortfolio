import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import './Detail.css';
import { useNavigate } from "react-router-dom";
import CV from '../../Utilities/CV.pdf';
const HeaderDescption = () =>{
    const navigate = useNavigate();
    const navigateToContact = () =>{
        navigate('contact');
    }
    
    return(
        <div className="Descption-details">
            <h5>Full Stack DEVELOPER</h5>
            <h1>Hey, Welcome <br />I am Gatsinzi Ernest</h1>
            <p>Hi there! I am Gatsinzi Ernest, <br />I work as a full-time Software engineer. <br /> In my spare time, I do side projects, learning new things and sports. <br />I use Javascript Both on Frontend part as well as Backend.</p>
            <div className="container-btn">
                <Button Onclick={navigateToContact} OtherClassName='normal'>Contact me <FontAwesomeIcon icon='paper-plane'/></Button>
                <a href={CV} download='Resume'><Button OtherClassName='black'>DownloadCV <FontAwesomeIcon icon='download'/></Button></a>
            </div>
        </div>
    );
}

export default HeaderDescption;