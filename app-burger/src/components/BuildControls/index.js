import React from 'react'
import BuildControl from "../BuildControl"
import styles from '../BuildControls/style.module.css'


export const BuildControls = props => {
    return(
  
    <div className={styles.BuildControls}>
        <BuildControl type ="Salad" orts="Салад"/>
    <BuildControl type="Bacon " orts="Гайхан мах"/>
    <BuildControl type="Cheese  " orts="Бяслаг"/>
    <BuildControl type="Meat " orts="Мах"/>
    </div>
    
    )
  
}
export default BuildControls; sss