import { Link } from "react-router-dom";
import { ColorModeContext } from "../../Context/Mode/ColorMode";
import { useContext } from "react";
const MenuLinks = ({otherClass}) =>{
    const {Color} = useContext(ColorModeContext);
    return(
        <ul className={`menu-links  ${otherClass} ${Color === 'normal' ? `` : 'menu-links-dark'}`} >
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About me</Link></li>
            <li><Link to='/project'>Project</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    )
}

export default MenuLinks;