import React from 'react'
import BurgerIngredient from '../BurgerIngredient'
import styles from '../Burger/style.module.css'
export const Burger = () => (
  
  <div className={styles.Burger}>
    <BurgerIngredient type="Breadtop"/>
    <BurgerIngredient type="Salad"/>
    <BurgerIngredient type="Bacon"/>
    <BurgerIngredient type="Meat"/>
    <BurgerIngredient type="Cheese"/>
    <BurgerIngredient type="Breadbottom"/> 
    
  </div> 
);

export default Burger;