import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// CSS Files
import "./index.css";
import "./login.css";

// Image Files
import img from "../../img/header_img.jpg";
import logo from "../../img/header_logo.svg";

// Material-UI Icons
import SearchIcon from "@material-ui/icons/Search";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PersonIcon from "@material-ui/icons/Person";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function Header() {
  const [searchWord, setSearchWord] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const searchCommunity = () => {
    console.log(searchWord);
  };

  const triggerShowPassword = () => {
    setShowPassword(!showPassword);
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  // LogIn but now working as SignIn
  const logIn = async (username, password) => {
    if (username !== "" && password !== "") {
      axios
        .post("http://localhost:3001/login", { username, password })
        .then(setShowLogin(false))
        .catch((err) => console.error(err));
      setUserName("");
      setPassword("");
    } else {
      alert("please enter valid username or password");
    }
  };

  return (
    <div className="header">
      <img src={img} alt="" />
      <div className="header__main">
        <Link to="/" className="header__link">
          <img src={logo} alt="" />
        </Link>
        <div className="header__search">
          <input
            type="text"
            placeholder="Search Community"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <SearchIcon
            className="header__searchIcon"
            onClick={searchCommunity}
          />
        </div>
        <div className="header__rightOptions">
          <Link to="/whats-new" className="header__link">
            <FiberNewIcon className="header__icon" />
          </Link>
          <Link to="/forums" className="header__link">
            <FormatListBulletedIcon className="header__icon" />
          </Link>
          <div
            className="header__rightOptions__Login"
            onClick={() => setShowLogin(true)}
          >
            <PersonIcon className="header__icon" />
            <p>Login / Join</p>
          </div>
          <MoreVertIcon className="header__icon" />
        </div>
      </div>

      {/* Login Section */}
      {showLogin ? (
        <div className="login">
          <div className="login__container">
            <div className="login__leftSection">
              <h1>Join Our Community</h1>
              <ul>
                <li>Follow topics that matter to you</li>
                <li>Connect with those who share your interests</li>
                <li>Learn from the experts in our community</li>
              </ul>
              <p>Join now to ask, comment, and connect!</p>
              <Link to="/register">
                <button
                  className="login__register"
                  onClick={() => setShowLogin(false)}
                >
                  Join Now
                </button>
              </Link>
            </div>
            <div className="login__rightSection">
              <h1>Log In</h1>
              <CloseIcon
                className="login__closeBtn"
                onClick={() => setShowLogin(false)}
              />
              <div className="login__inputField">
                <label>Username or Email</label>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="login__inputField">
                <label>Password</label>
                <div className="login__password">
                  <input
                    type={passwordType}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="login__ShowHidePwd"
                    onClick={triggerShowPassword}
                  >
                    {showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <RemoveRedEyeIcon />
                    )}
                    {showPassword ? <p>Hide</p> : <p>Show</p>}
                  </div>
                </div>
              </div>
              <p className="login__forgetPwd">Forgot your password?</p>
              <div className="login__checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => setStayLoggedIn(!stayLoggedIn)}
                />
                <label>Stay logged in</label>
              </div>
              <button onClick={() => logIn(username, password)}>Log in</button>
              <div>
                This is the section await for Facebook / Google Authentication
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
