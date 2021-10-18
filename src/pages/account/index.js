import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { actionCreators } from "../../Store/user";

// css file
import "./index.css";

// material UI
import SaveIcon from "@material-ui/icons/Save";

function Account({ user: { userID }, userLogOut }) {
  const [user, setUser] = useState({});

  useEffect(async () => {
    const res = await axios.get(`http://localhost:3001/login/${userID}`);
    setUser(res.data);
  }, []);

  return (
    <div className="account">
      <div className="account__title">
        <p>
          <Link to="/" className="account__titleLink">
            <span>Home</span> {">"}
          </Link>
        </p>
        <p>Account details</p>
      </div>
      <div className="account__main">
        <div className="account__mainLeft">
          <div className="account__mainLeft__title">
            <p>Your account</p>
            <ul>
              <li>Your profile</li>
              <li>Alerts</li>
              <li>Reactions received</li>
              <li>Bookmarks</li>
            </ul>
          </div>
          <div className="account__mainLeft__setting">
            <p>Settings</p>
            <ul>
              <li>Account details</li>
              <li>Password and security</li>
              <li>Privacy</li>
              <li>Preferences</li>
              <li>Signature</li>
              <li>Account upgrades</li>
              <li>Connected accounts</li>
              <li>Following</li>
              <li>Ignoring</li>
            </ul>
          </div>
          <div className="account__mainLeft__business">
            <p>Business</p>
            <ul>
              <li>Register as a Business</li>
            </ul>
          </div>
          <Link to="/" className="account__mainLeft__link" onClick={userLogOut}>
            <div className="account__mainLeft__logout">
              <p>Log out</p>
            </div>
          </Link>
        </div>
        <div className="account__mainRight">
          <div className="account__mainRight__Left">
            <p>Username: </p>
            <p>Email: </p>
            <p>Location: </p>
            <p className="website">Website: </p>
            <div className="account__mainRight__leftSpecial">
              <p>Identities</p>
            </div>
            <p>Facebook: </p>
          </div>
          <div className="account__mainRight__Right">
            <p>
              {user.username} <span>Change</span>
            </p>
            <p>
              {user.password} <span>Change</span>
            </p>
            <input
              type="text"
              placeholder="Enter a location"
              autoComplete="none"
            />
            <input type="text" className="websiteInput" autoComplete="none" />
            <input type="text" autoComplete="none" />
          </div>
          <div className="saveDiv">
            <button>
              <SaveIcon className="saveIcon" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.account,
});

const mapDispatch = (dispatch) => ({
  userLogOut() {
    dispatch(actionCreators.userLogOut());
  },
});

export default connect(mapState, mapDispatch)(Account);
