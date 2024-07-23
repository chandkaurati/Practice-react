import { useEffect, useState } from 'react'
import './App.css'
import Progress from './componants/Progress'

function App() {
  const [value, setValue] = useState(0)
   
  useEffect(()=>{
    setInterval(() => {
       setValue((val)=> val + 1)
    }, 100);
  }, [])
  return (
   <>
    <div className='app'>
     <span>Progress bar</span>
      <Progress value={value}/>
    </div>
   </>
  )
}

export default App
