import React from 'react'
import {useState} from 'react'
export default function US13() {
    const [category,setcategory]=useState('all')
    const mobiles = [
    { id: 1, brand: "samsung", img: "6.png" },
    { id: 2, brand: "samsung", img: "7.png" },
    { id: 6, brand: "samsung", img: "f.png" },
    { id: 6, brand: "mi", img: "mi.png" },
    { id: 6, brand: "mi", img: "mi1.png" },
  ];
  


  const filtermobile=category==='all'?mobiles:mobiles.filter((mobile)=>mobile.brand==category)
  return (
    <div>
        <button onClick={()=>{
            setcategory('samsung')
        }}>samsung</button>
          <button onClick={()=>{
            setcategory('mi')
        }}>mi</button>
        {
            filtermobile.map((i)=>(
                <div>
                    <img src={i.img}></img>
                    <h3>{i.brand}</h3>
                    </div>
            ))
        }
      
    </div>
  )
}
