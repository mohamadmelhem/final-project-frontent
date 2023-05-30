import Card from "../ui/Card";
import "./ResortGallery.css";

const ResortGallery = (props) => {
  return (
    <div className="bangalos-gallery">
      {props.data && props.data.map((resort) => (
        <Card data={resort} key={resort.id} />
      ))}
    </div>
  );
}; 

export default ResortGallery;
