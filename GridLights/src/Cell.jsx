import React from 'react'

function Cell({filled,  onclick, isDisabeled, label}) {
  return <button type='button' disabled = {isDisabeled} ariea-lable = {label} onClick={onclick} className={filled ? "cell cell-activated" : "cell"}></button>
}

export default Cell
