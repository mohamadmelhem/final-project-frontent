
import RoomCard from "../ui/RoomCard";

const BangaloGallery = (props) => {
    return (<div className="bangalos-gallery">
        {props.data && props.data.map((bangalo,index) => (
            <RoomCard data={bangalo} key={index}/>))}
    </div>)
}
export default BangaloGallery;