import React from 'react'
import { useState } from 'react'
export default function US12() {
    const [formdata,setformdata]=useState({})
    const hc=(e)=>{
        const{name,value}=e.target
        setformdata({...formdata,[name]:value})
    }
    const hs=(e)=>{
        e.preventDefault()
        if(formdata.password==formdata.newpassword){
            alert('verified')
        }
        else{
            alert('not-verified')
        }
    }
  return (
    <div>
    <form onSubmit={hs}>
    <input name='password' onChange={hc}></input>
    <input name='newpassword' onChange={hc}></input>
    <input type='submit'></input>
    </form>
      
    </div>
  )
}
