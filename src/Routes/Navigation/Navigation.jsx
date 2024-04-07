import { Link } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import Navmenu from "../../Component/nav-menu/Menu";
import {ReactComponent as Logo} from '../../Assets/logo.svg';
import Footer from '../../Component/Footer/Footer';
import { ColorModeContext } from '../../Context/Mode/ColorMode';
import './navigation.css';
const Navigation = () =>{
    const {Color,setSticky,IsSticky} = useContext(ColorModeContext);

    const handleScroll = () =>{
        setSticky(window.scrollY > 0);    
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {window.removeEventListener('scroll', handleScroll)};
    },[])
    return (
        <Fragment>
        <nav className={`Navigation-menu ${IsSticky ? 'stick' : ''} ${Color === 'normal' ? `Navigation-bg` : 'dark-mode'}`}>
            <div className="logo-container">
                <Link to='/'><Logo  className='logo'/></Link>
            </div>
            <Navmenu></Navmenu>
        </nav>
        <Outlet/>
        <Footer/>
        </Fragment>
    )
};
export default Navigation;