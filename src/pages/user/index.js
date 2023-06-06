// import React from 'react';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../components/user/UserProfile.css"
import UserProfile from "../../components/user/UserProfile";
import UserContent from "../../components/user/UserContent";
import EditResortPop from "../../components/user/EditResortPop";
import AddResortPop from "../../components/user/AddResortPop";
function User() {
  const [data, setData] = useState([]);
  // const [isLoading,setIsLoading]=useState(false)
  const [AdResortPop, setAdResortPop] = useState(false);
  const [editResortPop, setEditResortPop] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const openResortHandler = () => {
    setEditResortPop(true);
  }
  const closeResortHandler = () => {
    // setEditResortPop(false)
  }
  const openAddHandler = () => {
    setAdResortPop(true);
  }
  const closeAddHandler = () => {
    // setAdResortPop(false)
  }
  useEffect(() => {
    axios.get(`https://hjezli-backend.onrender.com/touristResort/idUser/${localStorage.getItem('userId')}`)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="user-main-body">
      <UserProfile />
      {data && <UserContent handleOpen={openAddHandler} handleEditOpen={openResortHandler} data={data}/>}
      {editResortPop && <EditResortPop handleClose={closeResortHandler} />}
      {AdResortPop && <AddResortPop handleClose={closeAddHandler} />}
    </div>
  );
}

export default User;