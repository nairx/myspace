import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import Login from "./components/user/Login.js";
import { AppContext } from "./context/appContext.js";
import Home from "./components/home/Home.js";
import Navbar from "./components/navbar/Navbar.js";
import Album from "./components/album/Album.js";
import Post from "./components/post/Post.js";
import Footer from "./components/footer/Footer.js";

function App() {
  const PATH = process.env.REACT_APP_PATH;
  const { flag, setFlag, user } = useContext(AppContext);

  return (
    <>
      {flag < 1 ? (
        <Login />
      ) : (
        <Router>
          <div className="App-head">
            <div className="App-title">My Space</div>
            <div className="App-user">{user.name}</div>
          </div>
          <div className="App">
            <div className="App-sidemenu">
              <Navbar />
            </div>
            <div className="App-content">
              <Routes>
                <Route index path={`${PATH}/`} element={<Post />} />
                <Route path={`${PATH}/post`} element={<Post />} />
                <Route path={`${PATH}/album`} element={<Album />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </Router>
      )}
    </>
  );
}
export default App;
