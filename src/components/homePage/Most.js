// Import Swiper React components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Most.css"
const Most = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
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
            <div className="slide">
                <div className='image'>
                    <img src="https://s3-eu-west-1.amazonaws.com/deal-content/description/damask.jpg" alt="item" />
                </div>
                <div className="most-content">
                    <h3>Jbeil bangalos</h3>
                    <span className="location-item">Akkar, North Lebanon</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Our most important resorts</p>
                    <span className="more-info">more info <FontAwesomeIcon icon={faInfoCircle} size="md" /></span>
                </div>
            </div>
            <div className="slide">
                <div className='image'> 
                    <img src="https://makhsoom.com/lb/storage/32000/21849/7bbfc633a29ecf3cbd2f62186cc31539.jpg" alt="item" />
                </div>
                <div className="most-content">
                    <h3>Batroun bangalos</h3>
                    <span className="location-item">Akkar, North Lebanon</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Our most important resorts</p>
                    <span className="more-info">more info <FontAwesomeIcon icon={faInfoCircle} size="md" /></span>
                </div>
            </div>
            <div className="slide">
                <div className='image'>
                    <img src="https://makhsoom.com/lb/storage/32000/21849/6db29b9c29f47430919dcc52ae371325.jpg" alt="item" />
                </div>
                <div className="most-content">
                    <h3>Akkar bangalos</h3>
                    <span className="location-item">Akkar, North Lebanon</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Our most important resorts</p>
                    <span className="more-info">more info <FontAwesomeIcon icon={faInfoCircle} size="md" /></span>
                </div>
            </div>
            <div className="slide">
                <div className='image'>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b3/ca/fd/natureland.jpg?w=700&h=-1&s=1" alt="item" />
                </div>
                <div className="most-content">
                    <h3>kamou3a bangalos</h3>
                    <span className="location-item">Akkar, North Lebanon</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Our most important resorts</p>
                    <span className="more-info">more info <FontAwesomeIcon icon={faInfoCircle} size="md" /></span>
                </div>
            </div>
            <div className="slide">
                <div className='image'>
                    <img src="https://assets.gosawa.com/storage/32000/17673/3ccd01baa8d3e09a3809bc6965985db9.jpg" alt="item" />
                </div>
                <div className="most-content">
                    <h3>koura Camping</h3>
                    <span className="location-item">Akkar, North Lebanon</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Our most important resorts</p>
                    <span className="more-info">more info <FontAwesomeIcon icon={faInfoCircle} size="md" /></span>
                </div>
            </div>
        </Carousel>;
    </div>)
}
export default Most;