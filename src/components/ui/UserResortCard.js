import "./USerCard.css"
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faPlus,faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const UserResortCard = (props) => {
    const navigate = useNavigate();
    // const data = props.data
    return (<div className="user-card" >
        <div className="image">
            <img src="https://ajjerni.com/_next/image?url=https%3A%2F%2Fajj-prod-bucket-35607f1.s3.eu-west-1.amazonaws.com%2Fitem_295150_637939056827313242_ftmgr1_70f332a9ad.jpg&w=640&q=75" alt={'btats'} />
        </div>
        <div className="content">
            <h2><span>Resort name </span> <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label></h2>
            <div className='rating'>
                <ReactStars
                    count={5}
                    edit={false}
                    isHalf={true}
                    activeColor="#e6d168"
                    value={3} />
            </div>
            <p>ta3a ello hek byez3al</p>
            <div className="buttons">
                <button className="addBang" onClick={()=>{navigate('/user/bangalos')}}><FontAwesomeIcon className="icon" icon={faPlus} /> Add bangalo</button>
                <button className="edit"onClick={props.open}><FontAwesomeIcon className="icon" icon={faEdit} /> Edit</button>
                <button className="delete"><FontAwesomeIcon className="icon" icon={faTrash} /> Delete</button>
                
            </div>
        </div>
    </div>)
}
export default UserResortCard;