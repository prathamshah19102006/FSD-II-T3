import {useState} from 'react'
function US5(){
    const[brand,setBrand]=useState('mercedes')
    const [color,setcolor]=useState('black')
    const [model,setmodel]=useState('gle 4-matic')
    const [year,setyear]=useState('2023')
    const hc1=()=>{
        if(brand=='mercedes'){
            setBrand('audi')
        }
        else{
            setBrand('mercedes')
        }
        if(color=='black'){
            setcolor('blue')
        }
        else{
            setcolor('black')
        }
        if(model=='gle 4-matic'){
            setmodel('a6')
        }
        else{
            setmodel('gle 4-matic')
        }
        if(year=='2023'){
            setyear('2026')
        }
        else{
            setyear('2023')
        }
    }
    return(
        <>
        <button onClick={hc1}>press</button>
        <h3>My {brand}. It is  a {color} {model} from {year}.</h3>
        </>
    )
}
export default US5