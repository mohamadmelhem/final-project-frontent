import "./Body.css"
import search from "../../assets/search.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ResortGallery from "./ResortGallery"

const Body = (props) => {
    return (
        <>
            <div className="search">
                <img src={search} alt="search" />
                <div className="input-field">
                    <h1>Search for an Resort</h1>
                    <div>
                        <input type="text" placeholder="Akkar, Jbeil, Batroun..." />
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>
            </div>
            <ResortGallery data={props.data}/>
        </>
    )
}
export default Body;