import React from 'react'
import {Link} from "react-router-dom"
import Debounce from '../componants/debounce'
import Throtling from '../componants/throtling'
import MuFirstClassComponant from '../componants/firstClasscomp'
const Home = () => {
  return (
    <div>
     <nav style={{border: "2px solid red", display:'flex', gap: "5em"}}>
     <Link to="/about">about</Link>
     <Link to="/contact">Contact</Link>
     </nav>

     <h1>home</h1>

    <Debounce/>

    <br />
    <Throtling/>

  <br />

  <h1> classcompo</h1>
   <MuFirstClassComponant name="chand"/>
    </div>
  )
}

export default Home
