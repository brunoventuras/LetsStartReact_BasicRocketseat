import React from "react";
import Post from "./Post";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Teste!</h1>
        <Post title="Aprendendo React JS" />
        <Post title="Bruno" />
        <Post title="Ventura" />
      </div>
    );
  }
}
