import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cell from './Cell'

function App() {

  const [order , setOrder] = useState([])
  const [isDeactivating, setIsDeactivating]  = useState(false)
 const config = [
  [1,1,1,],
  [1,0,1,],
  [1,1,1,],
 ]


const deactivateCells = (index)=>{
  setIsDeactivating(true)

  const timer = setInterval(() => {
    setOrder((origOrder)=>{
      const newOrder = origOrder.slice()
      newOrder.pop()
    })

    if(newOrder.length === 0){
      clearInterval(timer)
      setIsDeactivating(false)
    }

  
  },300);

  return  newOrder
}
 const handleCLick =  (index)=>{
    const newOrder = [...order, index]
    setOrder(newOrder)
    console.log(newOrder)
    // deactivation
    if(newOrder.length === config.flat(1).filter(Boolean).length){
      // deactivateCells()
    }
 }
  return (
    <>
    <div className="wrapper">
    <div className='grid' style={{gridTemplateColumns: `repeat(${config[0].length}, 1fr)`}}>
      {config.flat(1).map((el,index)=>{
       return el?<Cell key={index} filled={order.includes(index)} onclick={()=> handleCLick(index)}/> : <span key={index}/>
      })}
    </div>
    </div>
    </>
  )
}

export default App
