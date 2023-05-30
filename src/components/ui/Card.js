import "./Card.css"
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
    const data=props.data
    const multImages = data.images.split(",")
    console.log(multImages)
    const navigate = useNavigate()
    return (<div className="main-card" >
        <div className="image">
            <img src={`http://localhost:8000/${multImages[0]}`} alt="card" />
        </div>
        <div className="content">
            <h2>{data.description}</h2>
            <span className="location">{data.location}</span>
            <div className='rating'>
                <ReactStars
                    count={5}
                    edit={false}
                    isHalf={true}
                    activeColor="#e6d168"
                    value={3.5}/>
            </div>
            <p>{data.description}</p>
            <span className="card-button" onClick={() => { navigate(`/Single-tourist/${data._id}`) }}>Learn More</span>
        </div>
    </div>)
}
export default Card;