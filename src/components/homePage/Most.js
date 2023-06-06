// Import Swiper React components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Most.css"
const Most = (props) => {
    const navigate=useNavigate();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 992 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 992, min: 576 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
        }
    }
    return (<div className="most">
        <h1 className="title">Our most important resorts</h1>
        <Carousel
            arrows={false}
            swipeable={true}
            responsive={responsive}
            draggable={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={false}
            transitionDuration={1500}
            containerClass="carousel-container"
        >
            {props.data.map((resort) => (
                <div className="slide" key={resort._id}>
                    <div className='image'>
                        <img src={resort.images[0]} alt={resort.name} />
                    </div>
                    <div className="most-content">
                        <h3>{resort.name}</h3>
                        <span className="location-item">{resort.location}</span>
                        <p>{resort.description}</p>
                        <span className="more-info" onClick={()=>{navigate(`/Single-tourist/${resort._id}`)}}>more info <FontAwesomeIcon icon={faInfoCircle} size="md" /></span>
                    </div>
                </div>
            ))}


        </Carousel>;
    </div>)
}
export default Most;