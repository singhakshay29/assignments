import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const[size,setSize]=useState(300);
  const handleSize=()=>{
    console.log(size);
    setSize((prev)=>prev+2);
    console.log(size);
  }
  return (
    <div id="main">
      <img onClick={()=>handleSize()} src={star}  height={`${size}px`} width={`${size}px`} />
    </div>
  )
}


export default App;
