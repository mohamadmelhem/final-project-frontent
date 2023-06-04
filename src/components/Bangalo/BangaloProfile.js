import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import ContentBangalo from "./ContentBangalo";
import "./BangaloBody.css"

const BangaloProfile = (props) => {
    const [active, setActive] = useState(props.data.images[0])

    return (<div className="bangalo-profile">
        <div>
            <div className="image">
                <img src={active} alt="sss" />
            </div>
            <div className="bangalo-gallery">
                {props.data && props.data.images.map((image, index) => (
                    <img src={image} alt={props.data.description} onClick={(e) => { setActive(e.target.src) }} key={index} />
                ))}
            </div>;
        </div>
        <ContentBangalo data={props.data} />
    </div>)
}
export default BangaloProfile;