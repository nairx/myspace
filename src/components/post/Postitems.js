import React from 'react'
import Comment from '../comment/Comment'
export default function Postitems(props) {
    const item = props.item
  return (
    <div>
        {/* <div>{item.userId}</div> */}
        <div><h3>Title: {item.title}</h3></div>
        <div>Body: {item.body}</div>
        <Comment id={item.id}/>
    </div>
  )
}
