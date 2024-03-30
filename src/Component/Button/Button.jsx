import './button.css'
const Button = ({children, OtherClassName, Onclick}) =>{
    
    return(
        <button onClick={Onclick} className={`${OtherClassName} all-button`}>
            {children}
        </button>
    )
}

export default Button;