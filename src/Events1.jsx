function Events1(){
const ocl=()=>{
document.getElementById('b').innerHTML='click one time👨‍👨‍👧👅'
}
const och=(e)=>{
document.getElementById('a').innerHTML=e.target.value
}
const odc=()=>{
document.getElementById('b').innerHTML='click two times(❁´◡`❁)'
}
const os=(e)=>{
e.preventDefault()
alert(document.getElementById('c').value+"😛")
}
return(
    <>
    <form onSubmit={os}>
        <input type='text' id='c' onChange={och}></input>
        <input type='submit'></input>
    </form>
    <h1 id="a">Event demo-1</h1>
    <button onClick={ocl} onDoubleClick={odc}>click/double/click</button>
    <h1 id='b'>clik/doubleclick demo</h1>
    </>
)
}
export default Events1