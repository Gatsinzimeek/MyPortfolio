import { createContext, useState } from "react";

export const ColorModeContext = createContext({
    Color: 'normal',
    setColor: () => {},
    IsSticky: false, 
    setSticky: () => {},
})

const ColorMode = ({children}) => {
    const [Color,setColor] = useState('normal');
    const [IsSticky, setSticky] = useState(false);
    let val = {
        Color,
        setColor,
        IsSticky, 
        setSticky
    }
  return (
    <ColorModeContext.Provider value={val}>
      {children}
    </ColorModeContext.Provider>
  )
}

export default ColorMode
