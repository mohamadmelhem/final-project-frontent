import "./UserProfile.css"
import {useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const UserProfile = () => {
const [dataUser,setDataUser]=useState({})
    useEffect(() => {
        axios.get(`https://hjezli-backend.onrender.com/user/${localStorage.getItem('userId')}`)
          .then(response => {
              setDataUser(response.data.data[0]);
          })
          .catch(error => {
            console.log(error);
          });
      },[]);
    return (
        <div className="user-profile">
           {dataUser && <div className="top-div">
                <div > <FontAwesomeIcon className="icon" icon={faUser} size="3x" /></div>
                <h1>{dataUser.firstName} {dataUser.lastName}</h1>
                <p>{dataUser.email}</p>
                <p>{dataUser.phone}</p>
            </div>}
        </div>
    )
}
export default UserProfile;