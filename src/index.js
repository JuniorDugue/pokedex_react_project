import React from "react";
import ReactDOM from "react-dom";
import Pokecard from "./components/Pokecard";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Pokecard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
