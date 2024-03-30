import { useState} from "react";
import Button from "../Button/Button";
import PersonDetail from './Person-detail/personInfo';
import QualificationInfo from "./Qualification/Qualification";
import Skills from "./Skills/Skills";
import './about-info.css'
const AboutDetail = () =>{
   
    const [Identity, setIdentity] = useState('person-detail');
    return(
        <div className="Info-container">
            <div className="Info-button">
                <Button Onclick={()=> setIdentity('person-detail')} OtherClassName='normal'>Personal Info</Button>
                <Button  Onclick={()=> setIdentity('qualification-detail')} OtherClassName='normal'>Qualification</Button>
                <Button  Onclick={()=> setIdentity('Skills-container')}OtherClassName='normal'>Skills</Button>
            </div>
            {
               Identity === 'Skills-container' ?
                    (<Skills/>):
               Identity === 'qualification-detail' ?
                    (<QualificationInfo/>): 
                (<PersonDetail/>)
            }        
        </div>
    )
}

export default AboutDetail;