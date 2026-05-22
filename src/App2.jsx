function App2(){
    var n='hello'
    return(
        <>
        <h1 style={{color:'red'}}>i am second component</h1>
        <h2>{'n'}</h2>
        <h2>{n}</h2>
        <h2>"{n}"</h2>
        <h2>"{"n"}"</h2>
        <h2>{"{n}"}</h2>
        <h2>{n.toUpperCase()}</h2>
        <h2>{[1,2,3].join(  )}</h2>
        {/*hello*/}
        </>
    )
}
export default App2