import {useState} from 'react'
function US4(){
    const[buttonText,setButtonText]=useState('show')
    const [text,setText]=useState('')
    const hr=()=>{
        if(buttonText=='show'){
            setButtonText('hide')
            setText('rohan 🧡 rapido showed')
        }
        else{
            setButtonText('show')
            setText('')
        }
    }
    return(
        <>
        <button onClick={hr}>{buttonText}</button>
        <h3>{text}</h3>
        </>
    )
}
export default US4