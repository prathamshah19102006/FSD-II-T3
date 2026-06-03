import React, { useEffect, useState } from 'react'

export default function UE2() {
    const [date,setdate]=useState(new Date())
    useEffect(()=>{
        setInterval(()=>{
            setdate(new Date())
        },1000)
    },[])
  return (
    <div>
      time={date.toLocaleTimeString()}<br></br>
      hr:{date.getHours()}<br></br>
      min:{date.getMinutes()}<br></br>
    </div>
  )
}
