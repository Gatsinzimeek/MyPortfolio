import React, { useContext } from 'react'
import { ColorModeContext } from '../../Context/Mode/ColorMode';
const Footer = () => {
  const {Color} = useContext(ColorModeContext);
  return (
    <div className={`${Color === 'normal' ? 'footer' : 'dark-mode'}`}>
      <p style={{textAlign: 'center', padding: '30px'}}> &copy; Designed by Gatsinzi Ernest</p>
    </div>
  )
}

export default Footer;
