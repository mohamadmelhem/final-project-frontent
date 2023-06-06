import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';
import { Outlet } from 'react-router-dom';

const Register = () => {
  const [dataSignup, setDataSignup] = useState({
    firstName:'',
    lastName:'',
    userName:'',
    email:'',
    phone:'',
    password:''
  });

  const navigate = useNavigate()

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('https://hjezli-backend.onrender.com/user/add', {

       "firstName":dataSignup.firstName,
     "lastName":dataSignup.lastName,
      "userName":dataSignup.userName,
       "email":dataSignup.email,
        "password":dataSignup.password,
        "phone":dataSignup.phone,
    })
      .then(response => {
        console.log(response.data)
        navigate('/login')
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataSignup(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="container-fluid">
      <Outlet />
      <div className="row main-content bg-success text-center">
        <div className="col-md-4 text-center company__info">
          <span className="company__logo">
            <h2>
              <span className="fa fa-android"></span>
            </h2>
          </span>
          <h4 className="company_title"><img src={Logo} alt='logo' /></h4>
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
                    name="firstName"
                    id="firstName"
                    className="form__input"
                    placeholder="firstName"
                    value={dataSignup.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form__input"
                    placeholder="lastName"
                    value={dataSignup.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    className="form__input"
                    placeholder="UserName"
                    value={dataSignup.userName}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form__input"
                    placeholder="email"
                    value={dataSignup.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="form__input"
                    placeholder="phone"
                    value={dataSignup.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form__input"
                    placeholder="password"
                    value={dataSignup.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <input type="submit" value="Submit" className="btn" onClick={submitHandler} />
                </div>
                <div className="row">
              <p>
                 have an account? <a href="/login">Login Here</a>
              </p>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
