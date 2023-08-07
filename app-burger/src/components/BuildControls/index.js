import React from 'react'
import css from "../BuildControls/styles.module.css"
import BuildControl from '../BuildControl'
const BuildControls = props => {
  return (
    <div className={css.BuildControls}>
        <BuildControl ortsNemeh={props.ortsNemeh} type='Salad' orts='Салад'/>
        <BuildControl ortsNemeh={props.ortsNemeh} type='Meat' orts='Мах'/>
        <BuildControl ortsNemeh={props.ortsNemeh} type='Cheese' orts='Бяслаг'/>
        <BuildControl ortsNemeh={props.ortsNemeh} type='Bacon' orts='Гахайн мах'/>
    </div>
    
  )
}

export default BuildControls ;