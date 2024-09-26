import React, { useMemo, useState } from 'react'

const Debounce = () => {
const [value, setValue] = useState("")
    
  const handleInput = (e) => {
    console.log(e.target.value);
  };

  const debounce = (fn, timer) => {
    let timerid;
    return (e) => {
      clearTimeout(timerid);
      timerid = setTimeout(() => {
        fn(e);
      }, timer);
    };
  };
  const debouned = useMemo(() => debounce(handleInput, 440), []);
  return (
    <div>
   <input type="text" value={value} onChange={(e)=>{
     setValue(e.target.value)
     debouned(e)
   }} />
      
    </div>
  )
}

export default Debounce
