import React, { useEffect, useState } from 'react'

function Progress({value = 0}) {
 const [percentage, setPercentage] = useState(value)
 
 useEffect(()=>{
   setPercentage(Math.min(100, Math.max(value, 0)))
 },[value])
  return (
    <div className='Progress'>
     <span>{percentage.toFixed()}</span>
     <div style={{width:`${percentage}%`}}/>
    </div> 
  )
}

export default Progress
