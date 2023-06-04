// import React from 'react';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../components/user/UserProfile.css"
import UserProfile from "../../components/user/UserProfile";
import UserContent from "../../components/user/UserContent";
import EditPop from "../../components/user/EditPop";
import EditResortPop from "../../components/user/EditResortPop";
import AddResortPop from "../../components/user/AddResortPop";
function User() {
  // const [data, setData] = useState([]);
  // const [isLoading,setIsLoading]=useState(false)
  const [AdResortPop, setAdResortPop] = useState(false);
  const [editResortPop, setEditResortPop] = useState(false);

  const openResortHandler=()=>{
    setEditResortPop(true);
  }
  const closeResortHandler=()=>{
    // setEditResortPop(false)
  }
  const openAddHandler=()=>{
    setAdResortPop(true);
  }
  const closeAddHandler=()=>{
    // setAdResortPop(false)
  }
  //   useEffect(() => {
  //     setIsLoading(true)
  //     axios.get('https://hjezli-backend.onrender.com/touristResort')
  //       .then(response => {
  //           setData(response.data.data);
  //         console.log(response.data.data);
  //         setIsLoading(false)
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   },[]);
  return (
    <div className="user-main-body">
      <UserProfile />
      <UserContent handleOpen={openAddHandler} handleEditOpen={openResortHandler}/>
      {editResortPop && <EditResortPop  handleClose={closeResortHandler}/>}
     {AdResortPop && <AddResortPop  handleClose={closeAddHandler}/>}
    </div>
  );
}

export default User;