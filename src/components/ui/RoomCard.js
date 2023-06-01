import "./Card.css"
import { useNavigate } from "react-router-dom";
const RoomCard = (props) => {
    const navigate = useNavigate()
    const data = props.data
    // const multImages = data.images.split(",")
    return (<div className="main-card">
        <div className="image">
            {/* <img src={`https://hjezli-backend.onrender.com/${multImages[0]}`} alt={props.data._id} /> */}
            {data.images.map((img) => {
                return <img src={img} alt={img} />
            })}
        </div>
        <div className="content">
            <h2>{props.data.description}</h2>
            <h4>starting {props.data.pricePerNight} / day</h4>
            <p className="light-text">{props.data.description}</p>
            <h4>camping location for {props.data.space} people</h4>
            <span className="card-button" onClick={() => { navigate(`/bangalo/${props.data._id}`) }}>Learn More</span>
        </div>
    </div>)
}
export default RoomCard;