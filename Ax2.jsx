
import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function Ax2() {

   const [joke,setjoke]=useState(null)
   function Fjoke(){
    axios
     .get('https://randomuser.me/api/')
     .then((res)=>{setjoke(res.data.results[0])})
     .catch((error)=>{console.log(error)})

   }
   useEffect(()=>{Fjoke()},[])
   if (!joke) return <p>Loading...</p>
 const{name,email,picture}=joke
  return (
    <div>
        <img src={picture.large}></img>
        <p>name:{name.first}{name.last}</p>
        <p>email:{email}</p>
      <button onClick={Fjoke}>generate</button>
    </div>
  )
}
