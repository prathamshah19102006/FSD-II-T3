import React, { useEffect, useState } from 'react'

export default function UE1() {
    const [stateA,setstateA]=useState(0)
    const [stateB,setstateB]=useState(0)
    const [stateC,setstateC]=useState(0)
    const sa=()=>{
        setstateA(stateA+1)
    }
    const sb=()=>{
        setstateB(stateB+1)
    }
    const sc=()=>{
        setstateC(stateC+1)
    }
    useEffect(()=>{
        alert('STATE CHANGED')
    },[stateA,stateB])
  return (
    <div>
      <button onClick={sa}>buttonA {stateA}</button>
      <button onClick={sb}>buttonB {stateB}</button>
      <button onClick={sc}>buttonC {stateC}</button>
    </div>
  )
}
