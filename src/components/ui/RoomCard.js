import "./Card.css"
import { useNavigate } from "react-router-dom";
const RoomCard = (props) => {
    const navigate = useNavigate()
    return (<div className="main-card">
        <div className="image">
            <img src={props.data.images[0]} alt={props.data._id} />
        </div>
        <div className="content">
            <h2>{props.data.name}</h2>
            <h4>starting {props.data.pricePerNight} / day</h4>
            <p className="light-text">{props.data.description}</p>
            <h4>camping location for {props.data.space} people</h4>
            <span className="card-button" onClick={() => { navigate(`/bangalo/${props.data._id}`) }}>Learn More</span>
        </div>
    </div>)
}
export default RoomCard;