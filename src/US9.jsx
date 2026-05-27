import React from 'react'
import { useState } from 'react'
export default function US9() {
     const [name,setname]=useState("")
     const [text,settext]=useState("")
     const [select,setselect]=useState('')
        const hc=(e)=>{
          e.preventDefault()
          alert(`welcome ${name}`)
           
        }
        const hc1=(e)=>{
            settext(e.target.value)
        }
        const hc2=(e)=>{
            setselect(e.target.value)
        }
  return (
    <div>
    <form onSubmit={hc}>
       <input type='text' name='fname' onChange={(e)=>{
        setname(e.target.value)
      }}></input>
      <textarea onChange={hc1} value={text}></textarea>
     <h3>{text}</h3>
     <h3>{select}</h3>
      <input type='submit'></input>
      <select onChange={hc2}>
        <option>hi</option>
        <option>hello</option>
        <option>bye</option>
      </select>
      </form>
    </div>
    
  )
}
