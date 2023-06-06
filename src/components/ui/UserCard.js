import "./USerCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

const UserCard = (props) => {
    const data = props.data
    return (<div className="user-card" >
        <div className="image">
            <img src={data.images[0]} alt={'btats'} />
        </div>
        <div className="content">
            <h2><span>{data.name}</span> <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label></h2>
            <p>{data.description}</p>
            <h4>camping location for {data.space} people</h4>
            <h4>starting {data.pricePerNight} / day</h4>
            <div className="buttons">
                <button className="edit" onClick={()=>{props.open(data._id)}}><FontAwesomeIcon className="icon" icon={faEdit} /> Edit</button>
                <button className="delete"><FontAwesomeIcon className="icon" icon={faTrash} /> Delete</button>

            </div>
        </div>
    </div>)
}
export default UserCard;