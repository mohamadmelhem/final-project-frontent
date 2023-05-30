import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faHouse,faLocation } from '@fortawesome/free-solid-svg-icons'
import "./Services.css"
const Services = () => {
    return (<div className="services">
        <h1 className='title'>services</h1>
        <div className='grid'>
            <div className='service'>
                <div className="image">
                    <FontAwesomeIcon icon={faUsers} size="4x" />
                </div>
                <span>+1500</span>
                <p>batata dgddg batata batata hadg hffy hfgy</p>
            </div>
            <div className='service'>
                <div className="image">
                    <FontAwesomeIcon icon={faHouse} size="4x" />
                </div>
                <span>+766</span>
                <p>batata dgddg batata batata hadg hffy hfgy</p>
            </div>
            <div className='service'>
                <div className="image">
                    <FontAwesomeIcon icon={faLocation} size="4x" />
                </div>
                <span>+300</span>
                <p>batata dgddg batata batata hadg hffy hfgy</p>
            </div>
            <div className='service'>
                <div className="image">
                    <FontAwesomeIcon icon={faUsers} size="4x" />
                </div>
                <span>+1500</span>
                <p>batata dgddg batata batata hadg hffy hfgy</p>
            </div>
        </div>
    </div>
    )
}
export default Services;