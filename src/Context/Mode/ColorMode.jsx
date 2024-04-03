import { createContext, useState } from "react";

export const ColorModeContext = createContext({
    Color: 'normal',
    setColor: () => {},
})

const ColorMode = ({children}) => {
    const [Color,setColor] = useState('normal');
    let val = {
        Color,
        setColor,
    }
  return (
    <ColorModeContext.Provider value={val}>
      {children}
    </ColorModeContext.Provider>
  )
}

export default ColorMode
