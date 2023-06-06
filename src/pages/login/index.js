import React, { useState, useContext } from "react";
import './index.css';
import Logo from '../../assets/logo.png';
import axios from "axios";
import AuthContext from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post('https://hjezli-backend.onrender.com/user/login', {
      userName: username,
      password: password
    })
      .then(response => {
        authCtx.login(response.data.data, response.data.id);
        navigate('/user')
      })
      .catch(error => {
        console.log(error);
      });
  };




  return (
    <div className="container-fluid">
      <div className="row main-content bg-success text-center">
        <div className="col-md-4 text-center company__info">
          <span className="company__logo">
            <h2>
              <span className="fa fa-android"></span>
            </h2>
          </span>
          <h4 className="company_title"><img src={Logo} alt='logo'/></h4>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 login_form">
          <div className="container-fluid">
            <div className="row">
              <h2>Log In</h2>
            </div>
      <div className="row">
        
        <form className="form-group">
          <div className="row">
            <input
              type="text"
              name="username"
              id="username"
              className="form__input"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="row">
            <input
              type="password"
              name="password"
              id="password"
              className="form__input"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="row">
            <input type="submit" value="Submit" className="btn" onClick={submitHandler} />
          </div>
          <div className="row">
              <p>
                Don't have an account? <a href="/register">Register Here</a>
              </p>
            </div>
        </form>
      </div>
      {/* Rest of the JSX code */}
    </div>
    </div>
        </div>
      </div>
   
  );
};

export default LoginPage;
