// import React from 'react';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../components/user/UserProfile.css"
import UserProfile from "../../components/user/UserProfile";
import UserBangContent from "../../components/user/UserBangContent";
import EditPop from "../../components/user/EditPop";
import AddBangaloPop from "../../components/user/AddBangaloPop";
function UserBangalos() {
  // const [data, setData] = useState([]);
  // const [isLoading,setIsLoading]=useState(false)
  const [addBangaloPop, setaddBangaloPop] = useState(false);
  const [editBangaloPop, setEditBangaloPop] = useState(false);
  const openEditBangaloHandler=()=>{
    setEditBangaloPop(true);
    console.log('open')
  }
  const closeEditBangaloHandler=()=>{
    setEditBangaloPop(false)
  }
  const openbangaloHandler=()=>{
    setaddBangaloPop(true);
    console.log('open')
  }
  const closeBangaloHandler=()=>{
    setaddBangaloPop(false)
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
      <UserBangContent handleOpenAdd={openbangaloHandler} handleOpenEdit={openEditBangaloHandler} />
      {addBangaloPop && <AddBangaloPop  handleClose={closeBangaloHandler}/>}
     {editBangaloPop && <EditPop  handleClose={closeEditBangaloHandler}/>}
    </div>
  );
}

export default UserBangalos;