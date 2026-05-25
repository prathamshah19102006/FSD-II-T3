import {useState} from 'react'
function US2(){
    const[style,setStyle]=useState('olive')
    const st=()=>{
        if(style==='olive'){
setStyle('pink')
        }
        else{
            setStyle('olive')
        }
        
    }
    return(
        <>
        <h1 style={{backgroundColor:style}}>Hello</h1>
        <button onClick={st}>Maithil ne Maro</button>
        </>
    )
}
export default US2