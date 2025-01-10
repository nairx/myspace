import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AppContext } from "../../context/appContext";
export default function Navbar() {
  const { user, setUser, setFlag } = useContext(AppContext);
  const PATH = process.env.REACT_APP_PATH;
  const handleLogout = () => {
    setUser((prev) => ({ ...prev, ...{ name: "", email: "", pass: "" } }));
    setFlag((prev) => 0);
  };
  return (
    <div className="navbar">
     
      <p>
        <Link to={`${PATH}/`}> Home </Link>
      </p>
      <p>
        <Link to={`${PATH}/post`}> Post </Link>
      </p>
      <p>
        <Link to={`${PATH}/album`}> Album </Link>
      </p>
      <p>
        <Link to={`${PATH}/`} onClick={handleLogout}>
          Logout
        </Link>
      </p>
    </div>
  );
}
