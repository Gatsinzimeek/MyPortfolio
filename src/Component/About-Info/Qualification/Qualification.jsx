import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const QualificationInfo = () =>{
    return(
        <div className="qualification-detail">
            <h1>My Awesome Journey</h1>
            <div className="details">
                <div className="Experience-section">
                    <h3><FontAwesomeIcon icon='briefcase'  className='icon'/>   Experience</h3>
                    <div className="work-detail">
                        <h4>Alx</h4>
                        <p>Full Stack</p>
                        <FontAwesomeIcon icon='location-dot' className='icon' /><span>Remote</span><br/>
                        <div className="red">
                        <FontAwesomeIcon icon='calendar-days'  className='icon'/><span>2022 - 2023</span><br/>
                        </div> 
                    </div>
                    <div className="work-detail">
                        <h4>Natcom</h4>
                        <p>Software Enginering</p>
                        <FontAwesomeIcon icon='location-dot'  className='icon'/><span>ON site</span><br/>
                        <div className="red">
                            <FontAwesomeIcon icon='calendar-days'  className='icon'/><span>2021 - 2022</span><br/>
                        </div> 
                    </div>
                </div>
                <div className="Education-section">
                    <h3><FontAwesomeIcon icon='graduation-cap'  className='icon'/>  Education</h3>
                    <div className="work-detail">
                        <h4>AUCA University</h4>
                        <p>Bachelor Of Software Engineering</p>
                        <div className="red">
                            <span>2023 - 2026</span><br/>
                        </div> 
                    </div>
                    <div className="work-detail">
                        <h4>ESSJT High school</h4>
                        <p>Diploma High school on Software Enginering</p>
                        <div className="red">
                            <span>2019 - 2022</span><br/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QualificationInfo;