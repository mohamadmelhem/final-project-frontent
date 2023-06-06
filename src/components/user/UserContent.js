import React from "react";
import "./UserContent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTable } from '@fortawesome/free-solid-svg-icons'
import UserResortCard from "../ui/UserResortCard";
function UserContent(props) {
    return (
        <div className="user-content">
            <h1> <FontAwesomeIcon className="icon" icon={faTable} size="" /> My Dashboard</h1>
            <div className="add-post">
                <button onClick={props.handleOpen}><FontAwesomeIcon className="icon" icon={faPlus}/> Add Resort</button>
            </div>
            <div className="user-dahsboard-gallery">
                {props.data && props.data.map((resort)=>(
                  <UserResortCard open={props.handleEditOpen} data={resort} key={resort._id}/>  
                ))}
            </div>
        </div>
    );
}

export default UserContent;