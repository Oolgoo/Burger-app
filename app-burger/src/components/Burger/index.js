import React from 'react'
import BurgerIngredient from '../BurgerIngredient'
import styles from '../Burger/style.module.css'

const Burger = props => {

 
  let a = []
  const items =Object.entries(props.orts)
  items.map(el=>{
    for(let i=0; i < el[1]; i++ )
    a.push(<BurgerIngredient key={`${el[0]}+${i}`} type={el[0]}/>)
  });
    
  if ( a.length === 0)
     a=<p >Please select made your burger </p> ; 
    
    return(
      
  <div className={styles.Burger}>
    <BurgerIngredient type="Breadtop"/>
    {a}
    <BurgerIngredient type="Breadbottom"/> 
    
  </div> 
 );
     };

export default Burger;