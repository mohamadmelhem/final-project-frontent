import "./Body.css"
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import ContentResort from "./ContentResort";

const ResortProfile = (props) => {
    // const multImages = props.data.images.split(",");
    const images = props.data.images;
    console.log(images);
    const [active, setActive] = useState(`${images[0]}`)
    return (<div className="resort-profile">
        <div>
            <div className="image">
                <img src={active} alt="sss" />
            </div>
            <div className="resort-gallery">
                {images && images.map((image) => (
                    <img src={image} alt="resort-images" onClick={(e) => { setActive(e.target.src) }} key={image} />
                ))}
            </div>
        </div>

        <ContentResort data={props.data} />
    </div>)
}
export default ResortProfile;