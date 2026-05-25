import { useState } from "react"
function US1(){
    const[count,setCount]=useState(0)
    // const hs=()=>{
    //     setCount(count+1)
    // }
    const dec=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    const inc=()=>{
        if(count<10){
            setCount(count+1)
        }
    }
    return(
        <>
            <h1>Usestate count change</h1>
            <h1>user clicked{count} times</h1>
            {/*<button onClick={hs}>click here</button>*/}
            <button onClick={inc}>increment</button>
            <button onClick={dec}>decrement</button>
        </>
    )
}
export default US1