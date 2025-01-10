import React, { useContext } from "react";
import { useFetch } from "../../useFetch";
import Homeitems from "./Homeitems";
import "./Home.css"
import { AppContext } from "../../context/appContext";
export default function Home() {
  const {user} = useContext(AppContext)
  const url = `https://jsonplaceholder.typicode.com/posts/`;
  const data = useFetch(url);
  return (
    <div>
      <h1>News Feeds</h1>
      <div className="Home-container">
        {data &&
          data.map((elem) => (
            <div key={elem.id}>
              {/* {elem.userId}-{elem.title}-{elem.body} */}
              <Homeitems item={elem} />
              <hr></hr>
            </div>
           
          ))}
      </div>
    </div>
  );
}

