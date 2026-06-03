import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Ax() {
   const [joke,setjoke]=useState('')
   function Fjoke(){
    axios
     .get('https://dog.ceo/api/breeds/image/random')
     .then((res)=>{setjoke(res.data)})
     .catch((error)=>{console.log(error)})

   }
   useEffect(()=>{
    setInterval(()=>{
        setjoke(joke)
    },8000)
   },[])
  return (
    <div>
      {/* <h1>{joke.setup}</h1>
      <h1>{joke.punchline}</h1> */}
      <img src={joke.message}></img>
      <button onClick={Fjoke}>generate</button>
    </div>
  )
}
