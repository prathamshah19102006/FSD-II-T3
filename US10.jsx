import React from 'react'
import { useState } from 'react'
export default function US10() {
    const [password,setpassword]=useState("")
    const [confpassword,setconfpassword]=useState("")
    const hc=(e)=>{
        e.preventDefault
       if(password==confpassword){
        alert('password matched successfullt')
       }
       else{
        alert('check password')
       }
    }
  return (
    <div>
        <form onSubmit={hc}>
      <input value={password} onChange={(e)=>setpassword(e.target.value)}></input>      
      <input value={confpassword} onChange={(e)=>setconfpassword(e.target.value)}></input>      
<button onSubmit={hc}>check</button>
</form>
    </div>
  )
}
