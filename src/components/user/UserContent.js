import React, { useState } from "react";
import "./UserContent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTable } from '@fortawesome/free-solid-svg-icons'
import UserResortCard from "../ui/UserResortCard";
function UserContent(props) {
    const [data, setData] = useState([]);
    return (
        <div className="user-content">
            <h1> <FontAwesomeIcon className="icon" icon={faTable} size="" /> My Dashboard</h1>
            <div className="add-post">
                <button onClick={props.handleOpen}><FontAwesomeIcon className="icon" icon={faPlus}/> Add Resort</button>
            </div>
            <div className="user-dahsboard-gallery">
                <UserResortCard open={props.handleEditOpen} />
                <UserResortCard open={props.handleEditOpen} />
                <UserResortCard open={props.handleEditOpen} />
                <UserResortCard open={props.handleEditOpen} />
                <UserResortCard open={props.handleEditOpen} />
            </div>
        </div>
    );
}

export default UserContent;