import React, { useState } from 'react'
import { createContext } from 'react'
import F2 from './F2.jsx'
const Appcontext=createContext()
export default function F1() {
    const [data,setdata]=useState({})
    const [formdata,setformdata]=useState({})
    const hc=(e)=>{
        const{name,value}=e.target
        setformdata({...formdata,[name]:value})
    }
    const hs=()=>{
        setdata(formdata)
    }
  return (
    <div>
      <Appcontext.provider value={data}>
<form onSubmit={hs}>
    <input type='text' name='fname' onChange={hc}>
    </input>
    <input type='radio' name='gender' onChange={hc}>male</input>
    <input type='radio' name='gender' onChange={hc}>female</input>
</form>
<F2/>
      </Appcontext.provider>

    </div>
  )
}
export {Appcontext}
