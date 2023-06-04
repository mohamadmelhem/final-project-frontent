import React from 'react';
import BangaloProfile from '../../components/Bangalo/BangaloProfile';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Bangalo(props) {
  const params = useParams();
  const [data, setData] = useState(null);
  
  useEffect(() => {
      axios.get(`https://hjezli-backend.onrender.com/houses/${params.id}`)
          .then(response => {
              setData(response.data.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, [params]);
  return (
    <>
     {data && <BangaloProfile data={data}/>}
    </>
  );
}

export default Bangalo;