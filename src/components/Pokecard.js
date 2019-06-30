import React, { Component } from "react";

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {

  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <h2>Name: {this.props.name}</h2>
        <img src={imgSrc}/>
        <p>Type: {this.props.type}</p>
        <p>Experience: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
