import React from 'react';
import ResortProfile from '../../components/tourist/ResortProfile';
import BangaloGallery from '../../components/Bangalo/BangaloGallery';
import { useState,useEffect } from 'react';
import axios from 'axios';

function TouristResort() {
    const [data, setData] = useState(null);

  useEffect(() => {

    axios.get('https://hjezli-backend.onrender.com/touristResort/646353019d12f9043929d27e')
      .then(response => {
          setData(response.data.response);
        console.log(response.data.data[0]);

      })
      .catch(error => {
        console.log(error);
      });
  },[data]);
    return (
        <>
            {data ? <ResortProfile data={data}/> : <p>loading...</p>}
            <BangaloGallery/>
        </>
    );
}

export default TouristResort;