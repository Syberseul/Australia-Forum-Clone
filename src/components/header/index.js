import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import img from "../../img/header_img.jpg";
import logo from "../../img/header_logo.svg";

// Material-UI Icons
import SearchIcon from "@material-ui/icons/Search";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PersonIcon from "@material-ui/icons/Person";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Header() {
  const [searchWord, setSearchWord] = useState("");

  const searchCommunity = () => {
    console.log(searchWord);
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
          <div className="header__rightOptions__Login">
            <PersonIcon className="header__icon" />
            <p>Login / Join</p>
          </div>
          <MoreVertIcon className="header__icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
