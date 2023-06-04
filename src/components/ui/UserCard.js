import "./USerCard.css"
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

const UserCard = (props) => {
    // const data = props.data
    return (<div className="user-card" >
        <div className="image">
            <img src="https://ajjerni.com/_next/image?url=https%3A%2F%2Fajj-prod-bucket-35607f1.s3.eu-west-1.amazonaws.com%2Fitem_295150_637939056827313242_ftmgr1_70f332a9ad.jpg&w=640&q=75" alt={'btats'} />
        </div>
        <div className="content">
            <h2><span>signle baby </span> <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label></h2>
            <p>ta3a ello hek byez3al</p>
            <h4>camping location for 2 to 4 people</h4>
            <h4>starting 70$ / day</h4>
            <div className='rating'>
                <ReactStars
                    count={5}
                    edit={false}
                    isHalf={true}
                    activeColor="#e6d168"
                    value={3} />
            </div>
            <div className="buttons">
                <button className="edit"onClick={props.open}><FontAwesomeIcon className="icon" icon={faEdit} size="" /> Edit</button>
                <button className="delete"><FontAwesomeIcon className="icon" icon={faTrash} size="" /> Delete</button>

            </div>
        </div>
    </div>)
}
export default UserCard;