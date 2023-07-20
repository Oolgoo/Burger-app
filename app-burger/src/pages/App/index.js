import React from 'react';
import './style.css';
import Toolbar from '../../components/Toolbar';
import BurgerBuilder from './Burgerbuilder';

function App() {
  return (
    <div>
      <div><Toolbar/></div>
      <div> <BurgerBuilder/> </div>
    </div>
  );
}

export default App;
