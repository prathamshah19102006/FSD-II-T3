
import {useState} from 'react'
function US3(){
    const [pic,setPic]=useState('a.png')
    const hq=()=>{
        if(pic=='a.png'){
            setPic('b.png')
        }
        else{
            setPic('a.png')
        }
    }
    return(
        <>
        <img src={pic}></img>
        <button onClick={hq}>toggle</button>
        </>
    )
}
export default US3