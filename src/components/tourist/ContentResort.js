import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContentResort = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    axios.get('https://hjezli-backend.onrender.com/646353019d12f9043929d27e')
      .then(response => {
        setData(response.data.response);

        console.log(response.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const phoneNumber = '76511394';
  return (
    <div className="content">
      <h1>koura camping</h1>
      <h3><FontAwesomeIcon icon={faHouse} /> About Resort</h3>
      <p>
        The Grand Gloria hotel is an exquisite spectacle, ideally located in New Boulevard, on the frontline of the Batumi Black Sea shore.
        <br />
        The hotel encapsulates the warmth of Georgian hospitality in an industrially developed area that is in close proximity with most popular tourist attractions.
        <br />
        Guests get to enjoy a full and immersive experience of Georgian entertainment with a flock of restaurants, shopping malls, dancing fountains, nightclubs, and the seaside boulevard operating around the hotel.
        <br />
        The Grand Gloria hotel is an exquisite spectacle, ideally located in New Boulevard, on the frontline of the Batumi Black Sea shore.
        <br />
        The Grand Gloria hotel is a prime location for guests and travelers hoping to become fully immersed in Georgian hospitality and culture because of its state of the art facilities and its choice location.
      </p>
      <div className="sub-grid">
        <div>
          <h3><FontAwesomeIcon icon={faLocation} /> Location</h3>
          <p>{data? data.location : 'loading...'}</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.0691395177387!2d35.77936301150111!3d34.2597926729673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521fbf4877bc86d%3A0x9e6113ac62119307!2sKoura%20Camping!5e1!3m2!1sen!2slb!4v1685285841970!5m2!1sen!2slb" width="100%" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map" />
        </div>
        <div className="sub-content">
          <div className="contact-resort">
            <h3><FontAwesomeIcon icon={faPhone} /> book now!</h3>
            <div className='links-social'>
              <a className='watsap' href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
              </a>
              <a href='/' className='facebook' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} /> facebook
              </a>
              <a href='/' className='insta' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentResort;
