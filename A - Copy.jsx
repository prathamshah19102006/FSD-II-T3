import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function A() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios
        .get('/Student.json')
        .then((r)=>{
            setdata(r.data)
        })
        .catch((e)=>{
            console.log(e)
        })

    },[])
  return (
    <div>
      <h2>list of students</h2>
      {
    //   data.map((i)=>(
    //     <div>
    // <h3>id:{i.id}</h3>
    // <h3>id:{i.name}</h3>
    // <h3>id:{i.course}</h3>
    //     </div>
    //   ))
    data.filter((i)=>i.id=='2').map((i)=>(
        <div>
            <h3>{i.id}</h3>
            <h3>{i.name}</h3>
            <h3>{i.course}</h3>
            </div>
    ))
    }
    </div>
  )
}
