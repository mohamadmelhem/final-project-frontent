import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import ContentBangalo from "./ContentBangalo";
import "./BangaloBody.css"
const BangaloProfile = () => {
    const [active, setActive] = useState('https://www.lebanontraveler.com/wp-content/uploads/2018/01/joy-of-the-great-outdoors-2_055021.jpg')

    return (<div className="bangalo-profile">
        <div>
            <div className="image">
                <img src={active} alt="sss" />
            </div>
            <div className="bangalo-gallery">

                <img src="https://s3-eu-west-1.amazonaws.com/deal-content/description/damask.jpg" alt="item" onClick={(e) => { setActive(e.target.src) }} />


                <img src="https://makhsoom.com/lb/storage/32000/21849/7bbfc633a29ecf3cbd2f62186cc31539.jpg" alt="item" onClick={(e) => { setActive(e.target.src) }} />


                <img src="https://makhsoom.com/lb/storage/32000/21849/6db29b9c29f47430919dcc52ae371325.jpg" alt="item" onClick={(e) => { setActive(e.target.src) }} />


                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b3/ca/fd/natureland.jpg?w=700&h=-1&s=1" alt="item" onClick={(e) => { setActive(e.target.src) }} />


                <img src="https://assets.gosawa.com/storage/32000/17673/3ccd01baa8d3e09a3809bc6965985db9.jpg" alt="item" onClick={(e) => { setActive(e.target.src) }} />

            </div>;
        </div>
        <ContentBangalo/>
    </div>)
}
export default BangaloProfile;