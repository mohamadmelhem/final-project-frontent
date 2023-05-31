import React from 'react';
import ResortProfile from '../../components/tourist/ResortProfile';
import BangaloGallery from '../../components/Bangalo/BangaloGallery';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TouristResort() {
    const [data, setData] = useState(null);
    const [bangalos, setBangalos] = useState(null);
   const params = useParams();
  useEffect(() => {
    axios.get(`https://hjezli-backend.onrender.com/touristResort/${params.id}`)
      .then(response => {
          setData(response.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });

      axios.get(`https://hjezli-backend.onrender.com/houses/idTouristResort/${params.id}`)
      .then(response => {
          setBangalos(response.data.data);
          console.log("testingggg",response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  },[params]);
    return (
        <>
            {data ? <ResortProfile data={data}/> : <p>loading...</p>}
            {data ? <BangaloGallery data={bangalos}/> : <p>loading...</p>}
        </>
    );
}

export default TouristResort;