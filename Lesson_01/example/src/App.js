import React from "react";
import Comment from "./components/Comment";
import "./App.css";

function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  };
  return (
    <div className="App">
      <Comment  date={comment.date} text={comment.text} author={comment.author}/>
    </div>
  );
}

export default App;
