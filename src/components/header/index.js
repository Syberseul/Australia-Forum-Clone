import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { actionCreators } from "../../Store/user";

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

function Header({ user, userLogIn }) {
  const [searchWord, setSearchWord] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/login/${userID}`);
    setUserName(res.data.username);
  }, []);

  // Implement later once upload and update blog is finished
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

  const loginValidation = (res) => {
    if (res !== "User not found") {
      userLogIn(res);
      setUserID(res);
      setEmail("");
      setPassword("");
    } else {
      console.log("User not found");
    }
  };

  // LogIn
  const logIn = async (email, password) => {
    if (email !== "" && password !== "") {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      if (res.data !== "User not found") {
        setShowLogin(false);
        loginValidation(res.data);
      } else {
        alert("Not matched email and password is found");
      }
    } else {
      alert("please enter valid username or password");
    }
  };

  // Trigger login section to show login component or user log out
  const TriggerLogInOut = () => {
    if (!user.userLoggedIn) {
      setShowLogin(true);
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
            onClick={TriggerLogInOut}
          >
            {user.userLoggedIn ? (
              <Link to="/account" className="header__link">
                <PersonIcon className="header__icon" />
                <p>{userName}</p>
              </Link>
            ) : (
              <>
                <PersonIcon className="header__icon" />
                <p>Login / Join</p>
              </>
            )}
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
                <label>Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
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
                  onChange={() => setStayLoggedIn(!stayLoggedIn)}
                />
                <label>Stay logged in</label>
              </div>
              <button onClick={() => logIn(email, password)}>Log in</button>
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

const mapState = (state) => ({
  user: state.account,
});

const mapDispatch = (dispatch) => ({
  userLogIn(userID) {
    dispatch(actionCreators.userLogin(userID));
  },
});

export default connect(mapState, mapDispatch)(Header);
