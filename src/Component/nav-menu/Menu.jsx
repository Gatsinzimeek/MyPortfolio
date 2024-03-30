import MenuLinks from "./menu-links";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './menu.css'
const Navmenu = () =>{
    const [icon, setIcon] = useState('sun');
    const [menubar, setMenu] = useState('');
    const [showxbar, setBara] = useState('');

    const handlechange = (data) =>{
        setMenu('PopUp');
        setBara('show');
    }

    const closer = () =>{
        setBara('');
        setMenu('');
    }
    
    const ChangeColor = () =>{
        icon === 'sun' ? setIcon('moon') : setIcon('sun');
    } 
    return(
        <div className="menu">
            <MenuLinks otherClass = {menubar}/>
            <FontAwesomeIcon icon={icon}  className="color-mode" onClick={ChangeColor}/>
            <FontAwesomeIcon icon='bars' onClick={handlechange} className="menu-bar"/>
            <FontAwesomeIcon icon='xmark' onClick={closer} className={`X-bar ${showxbar}`}/>
        </div>
    )
}

export default Navmenu;