// import React from 'react';
import Cover from '../../components/tourist/Cover';
import Body from '../../components/tourist/Body';
import React, { useState, useEffect } from "react";
import axios from "axios";

function TouristResort() {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get('https://hjezli-backend.onrender.com/touristResort')
      .then(response => {
          setData(response.data.data);
        console.log(response.data.data);
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error);
      });
  },[]);
    return (
      <>
      <Cover/>
      {isLoading ? <p>Loading data...</p> : (<Body data={data}/>)}
      </>
    );
  }
  
  export default TouristResort;