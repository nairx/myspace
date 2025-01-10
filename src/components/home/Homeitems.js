import React, { useContext } from "react";
import Comment from "../comment/Comment";
import { AppContext } from "../../context/appContext";
export default function Homeitems(props) {
  const { users } = useContext(AppContext);
  const item = props.item;
  return (
    <div>
      <div>
        <h3>
          {users[item.userId - 1].name}: {item.title}
        </h3>
      </div>
      <div>{item.body}</div>
      <Comment id={item.id} />
    </div>
  );
}
