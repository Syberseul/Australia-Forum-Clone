import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

// css file
import "../index.css";

// material UI
import SaveIcon from "@material-ui/icons/Save";

function AccountDetail({ user: { userID } }) {
  const [user, setUser] = useState({});
  const [changeUsername, setChangeUsername] = useState(false);
  const [changeEmail, setChangeEmail] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [facebook, setFacebook] = useState("");

  useEffect(() => {
    fetchData();
  }, [user]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:3001/login/${userID}`);
    setUser(res.data);
  };

  const toggleUsernameChange = () => {
    setChangeUsername((changeUsername) => !changeUsername);
    setNewUsername("");
  };

  const toggleEmailChange = () => {
    setChangeEmail((changeEmail) => !changeEmail);
    setNewEmail("");
  };

  const updateUserInfo = async () => {
    axios
      .put(`http://localhost:3001/update/${userID}`, {
        newUsername: newUsername || user.username,
        newEmail: newEmail || user.email,
        location: location || user.location,
        website: website || user.website,
        facebook: facebook || user.facebook,
      })
      .catch((err) => console.error(err));
    setChangeUsername(false);
    setChangeEmail(false);
    console.log(newUsername, newEmail, location, website, facebook);
  };

  return (
    <>
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
        {/* Change username section */}
        {changeUsername ? (
          <div className="updateContainer">
            <input
              type="text"
              placeholder="Enter your new username"
              onChange={(e) => setNewUsername(e.target.value)}
              className="updateNewUsername"
            />
            <button onClick={toggleUsernameChange}>Cancel</button>
          </div>
        ) : (
          <p>
            {user.username} <span onClick={toggleUsernameChange}>Change</span>
          </p>
        )}
        {/* Change email section */}
        {changeEmail ? (
          <div className="updateContainer">
            <input
              type="text"
              placeholder="Enter your new email"
              onChange={(e) => setNewEmail(e.target.value)}
              className="updateNewEmail"
            />
            <button onClick={toggleEmailChange} style={{ marginTop: "10px" }}>
              Cancel
            </button>
          </div>
        ) : (
          <p>
            {user.email} <span onClick={toggleEmailChange}>Change</span>
          </p>
        )}
        <input
          type="text"
          placeholder="Enter a location"
          autoComplete="none"
          onChange={(e) => setLocation(e.target.value)}
          defaultValue={user.location}
        />
        <input
          type="text"
          className="websiteInput"
          autoComplete="none"
          onChange={(e) => setWebsite(e.target.value)}
          defaultValue={user.website}
        />
        <input
          type="text"
          autoComplete="none"
          onChange={(e) => setFacebook(e.target.value)}
          defaultValue={user.facebook}
        />
      </div>
      <div className="saveDiv">
        <button onClick={updateUserInfo}>
          <SaveIcon className="saveIcon" />
          Save
        </button>
      </div>
    </>
  );
}

const mapState = (state) => ({
  user: state.account,
});

export default connect(mapState, null)(AccountDetail);
