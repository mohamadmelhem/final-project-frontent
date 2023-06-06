import React, { useState } from 'react';
import "./Body.css";
import search from "../../assets/search.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ResortGallery from "./ResortGallery";
import axios from 'axios';

const Body = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://hjezli-backend.onrender.com/houses/location/${searchQuery}`);
      const searchData = response.data;
      setSearchResults(searchData);
      setShowNoResultsMessage(searchData.length === 0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="search">
        <img src={search} alt="search" />
        <div className="input-field">
          <h1>Search for a Resort</h1>
          <div>
            <input type="text" placeholder="Akkar, Jbeil, Batroun..." value={searchQuery} onChange={handleChange} />
            <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>
      </div>
      {showNoResultsMessage && (
        <p className="no-results-message">No bangalows available in the searched location.</p>
      )}
      <ResortGallery data={searchResults.length > 0 ? searchResults : props.data} />
    </>
  );
};

export default Body;
