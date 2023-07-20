import React, { Component } from 'react';
import Burger from '../../../components/Burger';  // Make sure to import the correct Burger component
import BuildControls from '../../../components/BuildControls';
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad:1,
      Cheese:1,
      Bacon:2,
      Meat:2,
    }
  };

  render() {
    const {ingredients} = this.state;

    return (
      <div>
        <Burger orts={ingredients} />
         <BuildControls/> 
      </div>
    );
  }
}


export default BurgerBuilder;