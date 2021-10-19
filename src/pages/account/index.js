import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Reducer
import { actionCreators } from "../../Store/user";

// Components
import AccountDetail from "./components/AccountDetail";

// css file
import "./index.css";

function Account({ userLogOut }) {
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
          <AccountDetail />
        </div>
      </div>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  userLogOut() {
    dispatch(actionCreators.userLogOut());
  },
});

export default connect(null, mapDispatch)(Account);
