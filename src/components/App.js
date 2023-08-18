import React, { useEffect, useState } from 'react'
import '../styles/App.css';
 import { Loader } from './Loader';
 import { PhotoFrame } from './PhotoFrame';
const App = () => {
    const[num,setNum]=useState();
    const[isloading,setIsloading]=useState(false);
    const[data,setData]=useState(null);

    useEffect(()=>{
        if(num !== ''){
            setIsloading(true);
            fetch(`https://jsonplaceholder.typicode.com/photos/${num}`)
            .then(respones=>(
                respones.json())
                .then((data)=>
                setData(data)
            ))
            setIsloading(false);
        }
    },[num])

    const handleNum=(e)=>{
        setNum(e.target.value);
    }

    return(
        <>
       Id number
        <input type='number' value={num} onChange={handleNum}></input>
        {isloading &&<Loader/>}
        {data &&<PhotoFrame url={data.url} title={data.title}/>}
        </>
       

    )
   
  
}


export default App;
