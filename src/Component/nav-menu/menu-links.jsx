import { Link } from "react-router-dom";
const MenuLinks = ({otherClass}) =>{
    return(
        <ul className={`menu-links ${otherClass}`} >
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About me</Link></li>
            <li><Link to='/project'>Project</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    )
}

export default MenuLinks;