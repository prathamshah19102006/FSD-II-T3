import React from 'react'

export default function Destination(Props) {
  return (
    <>
   {
    Props.obj.map((i)=>(
        <div>
         <img src={i.image}></img>
         <h3>{i.name}</h3>
         <h3>{i.description}</h3>
        </div>
    ))
    
   }
   </>
  )
}
