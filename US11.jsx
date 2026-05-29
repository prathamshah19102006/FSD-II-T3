import React, { useState } from 'react'

export default function US11() {
    const [task,settask]=useState('')
    const [todolist,settodolist]=useState([])
     const hs=()=>{
        settodolist([...todolist,{id:Date.now(),name:task}])
        settask('')
     }
     const deletetask=(id)=>{
        settodolist(todolist.filter((task)=>task.id!==id))
     }
  return (
    <div>
      <input value={task} onChange={(e)=>
        settask(e.target.value)
    }></input>
      <button onClick={hs}>add</button>
      {
        todolist.map((task)=>(
            <div>
                <h3>{task.name}</h3>
                <button onClick={()=>deletetask(task.id)}>delete</button>
                </div>
        ))
      }
    </div>
  )
}
