import React, { useState } from "react";
import { Link } from "react-router-dom";

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

function Header() {
  const [searchWord, setSearchWord] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const searchCommunity = () => {
    console.log(searchWord);
  };

  // Login Section
  const Login = () => (
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
          <button>Join Now</button>
        </div>
        <div className="login__rightSection">
          <h1>Log In</h1>
          <CloseIcon
            className="login__closeBtn"
            onClick={() => setShowLogin(false)}
          />
          <div className="login__inputField login__username">
            <label>Username or Email</label>
            <input type="text" />
          </div>
          <div className="login__inputField login__password">
            <label>Password</label>
            <input type="password" />
          </div>
          <p>Forgot your password?</p>
          <label>
            <input type="checkbox" />
            Stay logged in
          </label>
          <button>Log in</button>
          <div>
            This is the section await for Facebook / Google Authentication
          </div>
        </div>
      </div>
    </div>
  );

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
      {showLogin ? <Login /> : null}
    </div>
  );
}

export default Header;
