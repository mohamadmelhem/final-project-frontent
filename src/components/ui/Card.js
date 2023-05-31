import "./Card.css"
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
    const data = props.data
    const multImages = data.images.split(",")
    const navigate = useNavigate();

    return (<div className="main-card" >
        <div className="image">
            <img src={`https://hjezli-backend.onrender.com/${multImages[0]}`} alt={data.name} />
        </div>
        <div className="content">
            <h2>{data.name}</h2>
            <span className="location">{data.location}</span>
            <div className='rating'>
                <ReactStars
                    count={5}
                    edit={false}
                    isHalf={true}
                    activeColor="#e6d168"
                    value={data.rating} />
            </div>
            <p>{data.description}</p>
            <span className="card-button" onClick={() => { navigate(`/Single-tourist/${data._id}`) }}>Learn More</span>
        </div>
    </div>)
}
export default Card;