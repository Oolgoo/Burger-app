import React from 'react'
import css from '../BuildControl/style.module.css'
export const BuildControl = props => (
<div className={css.BuildControl}>
    {props.orts}  
<buttonc onClick={()=> props.ortsNemeh(props.type)}className={css.More}>Нэмэх</buttonc>
<button onClick={()=> props.ortsNemeh(props.type)}className={css.Less}>Хасах</button>
</div>
);
export default BuildControl ;