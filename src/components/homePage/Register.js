import "./Register.css"
import register from "../../assets/register.svg"
const Register = () => {
    return (
    <div className="home-register">
        <div className="image">
            <img src={register} alt="register" />
        </div>
        <div className="content">
            <h1 className="">grow with us</h1>
            <p>you can add the rooms and resorts that you own on our application.<br/>
create your account on our app to the latest offers.
            </p>
            <button>Register now</button>
        </div>
    </div>
    )
}
export default Register;