// import React from 'react';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../components/user/UserProfile.css"
import UserProfile from "../../components/user/UserProfile";
import UserBangContent from "../../components/user/UserBangContent";
import EditPop from "../../components/user/EditPop";
import AddBangaloPop from "../../components/user/AddBangaloPop";
import { useParams } from "react-router-dom";

function UserBangalos() {
  const [data, setData] = useState([]);
  const idRisort = useParams().id
  // const [isLoading,setIsLoading]=useState(false)
  const [addBangaloPop, setaddBangaloPop] = useState(false);
  const [editBangaloPop, setEditBangaloPop] = useState(false);
  const [bangaloEdit,setBangaloEdit]=useState('')

  const openEditBangaloHandler=(bangId)=>{
    setEditBangaloPop(true);
    setBangaloEdit(bangId)
  }
  const closeEditBangaloHandler=()=>{
    // setEditBangaloPop(false)
  }
  const openbangaloHandler=()=>{
    setaddBangaloPop(true);
    console.log('open')
  }
  const closeBangaloHandler=()=>{
    // setaddBangaloPop(false)
  }
    useEffect(() => {
      // setIsLoading(true)
      axios.get(`https://hjezli-backend.onrender.com/houses/idTouristResort/${idRisort}`)
        .then(response => {
            setData(response.data.data);
          // setIsLoading(false)
        })
        .catch(error => {
          console.log(error);
        });
    },[]);
  return (
    <div className="user-main-body">
      <UserProfile />
      <UserBangContent handleOpenAdd={openbangaloHandler} handleOpenEdit={openEditBangaloHandler} data={data} />
      {addBangaloPop && <AddBangaloPop  handleClose={closeBangaloHandler}/>}
     {editBangaloPop && <EditPop  handleClose={closeEditBangaloHandler} bangaloId={bangaloEdit}/>}
    </div>
  );
}

export default UserBangalos;