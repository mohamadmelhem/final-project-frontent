import React, { useState } from "react";
import "./UserContent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTable } from '@fortawesome/free-solid-svg-icons'
import UserCard from "../ui/UserCard";
function UserContent(props) {
    const [data, setData] = useState([]);
    return (
        <div className="user-content">
            <h1> <FontAwesomeIcon className="icon" icon={faTable} size="" /> My Dashboard</h1>
            <div className="add-post">
                <button onClick={props.handleOpenAdd}><FontAwesomeIcon className="icon" icon={faPlus} size="" /> Add Bangalo</button>
            </div>
            <div className="user-dahsboard-gallery">
            {props.data && props.data.map((resort) => (
        <UserCard data={resort} key={resort.id} open={props.handleOpenEdit}  />
        ))}
            </div>
        </div>
    );
}

export default UserContent;