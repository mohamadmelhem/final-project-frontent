import "./UserProfile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const UserProfile = (props) => {
    return (
        <div className="user-profile">
            <div className="top-div">
                <div > <FontAwesomeIcon className="icon" icon={faUser} size="3x" /></div>
                <h1>Mohamad</h1>
                <p>maher.ri@live.com</p>
                <p>+961 76 511 394</p>
            </div>
        </div>
    )
}
export default UserProfile;