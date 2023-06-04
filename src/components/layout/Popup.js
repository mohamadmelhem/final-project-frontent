import "./Popup.css"

const Popup = (props) => {
    return (<div className="overlay" onClick={props.close}>
        <div className="popup-body">
            {props.children}
        </div>
    </div>
    )
}
export default Popup;