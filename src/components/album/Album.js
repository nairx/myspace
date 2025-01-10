import React, { useContext } from "react";
import { useFetch } from "../../useFetch";
import { AppContext } from "../../context/appContext";
export default function Album() {
  const {user} = useContext(AppContext)
  const url = `https://jsonplaceholder.typicode.com/albums/?userId=${user.id}`;
  const data = useFetch(url);
  return (
    <div>
      <h1>Albums</h1>
      <div className="Home-container">
        {data &&
          data.map((elem) => (
            <div key={elem.id}>
              {elem.title}
              <hr></hr>
            </div>
           
          ))}
      </div>
    </div>
  );
}

