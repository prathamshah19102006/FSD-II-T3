import React from 'react'

export default function Productlist(Props) {
  return (
    <>
    {
Props.info.map((i)=>(
    <div>
<h3>{i.name}</h3>
<h3>{i.price}</h3>
<img src={i.image} width='600px' height='600px'/>
    </div>
))
}
    </>
  )
}
