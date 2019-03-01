import React, { Component } from "react";

class Card extends Component{
  render(){
    return (
      <div className="tc bg-light-green br2 dib pa3 ma2 grow bw2 shadow-5">
        <img alt="robots" src={`https://robohash.org/${this.props.id}?150x150`} />
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
