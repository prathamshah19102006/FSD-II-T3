import React from 'react'
import { useState } from 'react'
export default function US7() {
    const [fn,setfn]=useState('')
    const [ln,setln]=useState('')
    const f2=(e)=>{
        setfn(e.target.value)
    }
    const f3=(e)=>{
        setln(e.target.value)
    }
  return (
    <div>
      <input type="text" name='fn' value={fn} onChange={f2}></input>
      <input type="text" name='ln' value={ln} onChange={f3}></input>
      <h3>{fn}:{ln}</h3>
    </div>
  )
}
