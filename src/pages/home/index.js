import Banner from "../../components/homePage/Banner"
import Services from '../../components/homePage/Services';
import AboutSection from '../../components/homePage/AboutSection';
import Most from '../../components/homePage/Most';
import Register from '../../components/homePage/Register';
import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get('https://hjezli-backend.onrender.com/touristResort')
      .then(response => {
          setData(response.data.data);
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error);
      });
  },[]);
    return (
      <>
<Banner/>
<Services/>
<Most data={data}/>
<Register/>
<AboutSection/>
      </>
    );
  }
  
  export default HomePage;
  
