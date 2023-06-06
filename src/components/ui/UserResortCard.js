import "./USerCard.css"
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faPlus,faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


const UserResortCard = (props) => {
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = useState(false);
    const data = props.data
   
    const handleDelete = async () => {
        setIsDeleting(true);
    
        try {
          const response = await axios.delete(`https://hjezli-backend.onrender.com/touristResort/${data._id}`);
          console.log(response.data);
    
          // Perform any additional actions or update the UI as needed
    
        } catch (error) {
          console.log(error);
        } finally {
          setIsDeleting(false);
        }
      };
      

    return (<div className="user-card" >
        <div className="image">
            <img src={data.images[0]} alt={data.name} />
        </div>
        <div className="content">
            <h2><span>{data.name}</span> <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label></h2>
            <div className='rating'>
                <ReactStars
                    count={5}
                    edit={false}
                    isHalf={true}
                    activeColor="#e6d168"
                    value={data.rating} />
            </div>
            <p>{data.description}</p>
            <div className="buttons">
                <button className="addBang" onClick={()=>{navigate(`/user/bangalos/${data._id}`)}}><FontAwesomeIcon className="icon" icon={faPlus} /> Add bangalo</button>
                <button className="edit"onClick={props.open}><FontAwesomeIcon className="icon" icon={faEdit} /> Edit</button>
                <button className="delete" disabled={isDeleting} onClick={handleDelete}><FontAwesomeIcon className="icon" icon={faTrash} /> Delete</button>
                
            </div>
        </div>
    </div>)
}
export default UserResortCard;