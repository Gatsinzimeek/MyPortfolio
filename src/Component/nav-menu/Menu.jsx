import MenuLinks from "./menu-links";
import {useState, useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorModeContext } from "../../Context/Mode/ColorMode";

import './menu.css'
const Navmenu = () =>{
    const [icon, setIcon] = useState('sun');
    const [menubar, setMenu] = useState('');
    const [showxbar, setBara] = useState('');

    const {setColor} = useContext(ColorModeContext);

    const handlechange = () =>{
        setMenu('PopUp');
        setBara('show');
    }


    const closer = () =>{
        setBara('');
        setMenu('');
    }
    
    const ChangeColor = () =>{
        if(icon === 'sun'){
            setIcon('moon');
            setColor('dark-mode'); 
        } else{
            setIcon('sun');
            setColor('normal');
        }
    } 
    return(
        <div className="menu">
            <MenuLinks otherClass = {menubar} />
            <FontAwesomeIcon icon={icon}  className="color-mode" onClick={ChangeColor}/>
            <FontAwesomeIcon icon='bars' onClick={handlechange} className="menu-bar"/>
            <FontAwesomeIcon icon='xmark' onClick={closer} className={`X-bar ${showxbar}`}/>
        </div>
    )
}

export default Navmenu;