import {useState} from 'react'
function US6(){
    const arr=['i1.png','i2.png','i3.png','i4.png','i5.png']
    const [pic,setpic]=useState(arr[0])
    const f1=()=>{
       var ind=Math.floor(Math.random()*arr.length)
       setpic(arr[ind])
    }
    return(
        <>
        <img src={pic}></img>
        <button onClick={f1}><h3>click to change image</h3></button>
        </>

    )
}
export default US6