import React from 'react'

function Cell({filled,  onclick}) {
  return <button type='button' onClick={onclick} className={filled ? "cell cell-activated" : "cell"}></button>
}

export default Cell
