import React from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/appContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";
export default function Login() {
  const { user, setUser, users, setUsers, flag, setFlag } =
    useContext(AppContext);
  const [visible, setvisible] = useState(false);
  const [msg, setMsg] = useState();
  const API = process.env.REACT_APP_API;
  const url = `${API}/users`;
  const validateUser = () => {
    if (user.name) setFlag(() => 1);
    else setMsg("User must be selected")
  };
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container">
        <div className="leftBox">
          <div className="title">Social React</div>
          <br></br>{" "}
          <div className="tagLine">Represent your self everywhere.</div>
        </div>
        <div className="rightBox">
          <div className="Login-msg">{msg}</div>
          <div>
            <select
              className="Select-txt" 
              onChange={(e) => setUser(users[e.target.value - 1])}
            >
               <option value={0}>-- Select User --</option>
              {users.map((value) => (
                <option value={value.id}>{value.name}</option>
              ))}
            </select>
          </div>
          <br></br>
          <br></br>
          <div>
            <button className="Login-btn" onClick={validateUser}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
