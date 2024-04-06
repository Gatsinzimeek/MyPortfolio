import './Project.css';
import { ColorModeContext } from '../../Context/Mode/ColorMode';
import { useContext } from 'react';

const Project = () =>{
    const {Color} = useContext(ColorModeContext);
    return(
        <section className={`Project-Container ${Color === 'normal' ? `` : 'dark-mode'}`}>
        <h1>Project page</h1>
        <div className="">
            New Project Coming soon .... &#x1F920;
        </div>
        </section>
    )
};

export default Project;