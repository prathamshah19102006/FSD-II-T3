import React, { useState } from 'react'

export default function code() {
    const [age,setage]=useState(42)
    function inc(){
        setage(a=>a+1)
    }
  return (
    <div>
      <h1>age is {age}</h1>
      <button onClick={()=>{inc(),inc(),inc()}}>add</button>
    </div>
  )
}
