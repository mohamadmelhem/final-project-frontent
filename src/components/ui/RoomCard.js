import "./Card.css"
import { useNavigate } from "react-router-dom";
const RoomCard = () => {
    const navigate = useNavigate()
    return (<div className="main-card" key={12}>
        <div className="image">
            <img src="https://www.lebanontraveler.com/wp-content/uploads/2018/01/joy-of-the-great-outdoors-2_055021.jpg" alt="card" />
        </div>
        <div className="content">
            <h2>koura camping</h2>
            <h4>starting 80$ / day</h4>
            <p className="light-text">The hotel encapsulates the warmth of Georgian hospitality in an industrially developed area that is in close proximity with most popular tourist attractions.</p>
            <h4>camping location for 2 to 4 people</h4>
            <span className="card-button" onClick={() => { navigate(`/bangalo/${12}`) }}>Learn More</span>
        </div>
    </div>)
}
export default RoomCard;