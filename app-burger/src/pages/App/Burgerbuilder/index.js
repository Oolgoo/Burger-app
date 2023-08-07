import React, { Component } from 'react';
import Burger from '../../../components/Burger';  // Make sure to import the correct Burger component
import BuildControls from '../../../components/BuildControls';
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Salad:0,
      Cheese:0,
      Bacon:0,
      Meat:0,
    }
  };

  ortsNemeh =(type) =>{
    console.log("=====>"+ type)
    
    const newingredients = {...this.state.ingredients};
    newingredients[type]++;
    this.setState({ingredients:newingredients})
  };

  render() {
    const {ingredients} = this.state;

    return (
      <div>
        <Burger orts={ingredients} /> 
        <BuildControls ortsNemeh={this.ortsNemeh}/>
   
      </div>
    );
  }
}


export default BurgerBuilder;