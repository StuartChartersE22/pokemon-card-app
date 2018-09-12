import React, { Component } from 'react';
import '../styles/DashBoard.css';
import Pokemon from 'pokemontcgsdk';

class DashBoard extends Component {

  constructor(props) {
    super(props)
  }

  render(){

    let card = null;

    Pokemon.card.find('base1-4')
      .then(result => {
        card = result.card.imageUrl;
        console.log(card);
      })

    return (
      <img src={card} alt="card"/>
    );
  }

}

export default DashBoard;
