import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContentBangalo = () => {
    const phoneNumber = '76511394'
    return (
        <div className="content">
            <h1>koura camping</h1>
            <h2>starting from 80$ / day</h2>
            <h2>Camping location for 2 to 4 people</h2>
            <h3><FontAwesomeIcon icon={faHouse} /> About Bangalo</h3>
            <p>Each location includes: Access to a private pool kitchen(fridge/freezer and gas) BBQ area and campfire Toilets and showers The choice between luxury tents or VW campervans. Check-in at 5 pm and check-out at 4 pm the next day.</p>
            <div className="sub-grid">
                <div>
                    <h3><FontAwesomeIcon icon={faLocation} /> Location</h3>
                    <p>The Grand Gloria hotel is an exquisite spectacle, ideally located in New Boulevard, on the frontline of the Batumi Black Sea shore. The Grand Gloria hotel encapsulates the warmth of Georgian hospitality.</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.0691395177387!2d35.77936301150111!3d34.2597926729673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521fbf4877bc86d%3A0x9e6113ac62119307!2sKoura%20Camping!5e1!3m2!1sen!2slb!4v1685285841970!5m2!1sen!2slb" width="100%" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map" />
                </div>
                <div className="sub-content">

                    <div className="contact-bangalo">
                        <h3><FontAwesomeIcon icon={faPhone} /> book now!</h3>
                        <div className='links-social'>
                        <a className='watsap' href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</a>
                        <a href='/' className='facebook' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> facebook</a>
                        <a href='/' className='insta' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> instagram</a>
                   </div> </div>
                </div>
            </div>
        </div>
    )
}
export default ContentBangalo;