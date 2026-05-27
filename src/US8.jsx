import React from 'react'
import { useState } from 'react'
export default function US8() {
    const [data,setdata]=useState({})
    const hc=(e)=>{
        const {name,value}=e.target
        setdata({...data,[name]:value})
    }
  return (
    <div>
      <input type='text' name='fname' onChange={hc}></input>
      <input type='text' name='lname' onChange={hc}></input>
      <h1 style={{color:'pink'}}>firstname: {data.fname}</h1>
      <h1 style={{color:'pink'}}>lastname :{data.lname}</h1>
    </div>
  )
}
