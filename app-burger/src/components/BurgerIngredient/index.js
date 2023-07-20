import React from 'react'
import styles from '../BurgerIngredient/style.module.css'

export const BurgerIngredient = props => {  
  if(props.type === 'Salad')  return <div className={styles.Salad}></div>
  if(props.type === "Cheese")  return <div className={styles.Cheese}></div>
  if(props.type === "Meat")  return <div className={styles.Meat}></div>
if(props.type === "Bacon")  return <div className={styles.Bacon}></div> 
if(props.type === "Breadbottom")  return <div className={styles.Breadbottom}></div>
if(props.type === "Breadtop" )  return( 
<div className={styles.Breadtop}>
 <div className={styles.seed}></div>
 <div className={styles.One}></div>
 <div className={styles.Two}></div>
 <div className={styles.T}></div>
 </div>
)
else 
return <div>Sorry choose food</div>
} ;
export default BurgerIngredient;