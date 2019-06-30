import React from "react";
import ReactDOM from "react-dom";
// import Pokecard from "./components/Pokecard";
import Pokedex from "./components/Pokedex";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <Pokecard id={7} name="Squirtle" type="water" exp={63} /> */}
      {/* <Pokecard id={4} name="Charmander" type="fire" exp={62} /> */}
      <Pokedex />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
