import React, { useState } from "react";
import axios from "axios";

// css file
import "./index.css";

// image files
import facebook from "../../img/facebookLogIn.png";
import google from "../../img/GoogleLogIn.png";

// material UI
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [readTerm, setReadTerm] = useState(false);

  const TriggerShowPassword = () => {
    setShowPassword(!showPassword);
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const register = async () => {
    if (!readTerm) {
      alert("please read the term and check the box!");
    } else if (username === "") {
      alert("please enter username");
    } else if (email === "") {
      alert("please enter email address");
    } else if (password === "") {
      alert("please enter your password");
    } else {
      axios
        .post("http://localhost:3001/register", { username, email, password })
        .then(console.log("post request"))
        .catch((err) => console.error(err));
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="register">
      <p>Register</p>
      <div className="register__faster">
        <div className="register__fasterText">
          <p>Register faster using:</p>
        </div>
        <div className="register__fasterImg">
          <img src={facebook} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
      <div className="register__form">
        <div className="register__formTop">
          <div className="register__formTopLeft">
            <div className="register__formTag firstTag">
              <p>User name:</p>
              <p>Required</p>
            </div>
            <div className="register__formTag secondTag">
              <p>Email:</p>
              <p>Required</p>
            </div>
            <div className="register__formTag">
              <p>Password:</p>
              <p>Required</p>
            </div>
          </div>
          <div className="register__formTopRight">
            {/* User name Input */}
            <div className="register__formInput username">
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <p>
                This is the name that will be shown with your messages. You may
                use any name you wish. Once set, it can only be changed once
                within 90 days of registering.
              </p>
            </div>
            {/* Email Input */}
            <div className="register__formInput email">
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            {/* Password Input */}
            <div className="register__formInput password">
              <div className="passwordContainer">
                <input
                  type={passwordType}
                  onChange={(e) => setPassword(e.target.value)}
                  className="register__passwordInput"
                />
                <div
                  className="showPasswordContainer"
                  onClick={TriggerShowPassword}
                >
                  {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                  {showPassword ? <p>Hide</p> : <p>Show</p>}
                </div>
              </div>
              <p>Entering a password is required</p>
            </div>
            <div className="register__checkboxContainer">
              <div className="register__checkbox">
                <input type="checkbox" defaultChecked />
                <label>Receive news and updates by email</label>
              </div>
              <div className="register__checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => setReadTerm(!readTerm)}
                />
                <label>
                  I agree to the <span>terms</span> and{" "}
                  <span>privacy policy</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="register__formBottom">
          <button onClick={register}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
