function App3(){
  var date=new Date()
    return(
        <>
    
        <ol type="I" className="a">
            <li>apple</li>
            <li>pineapple</li>
            <li>mango</li>
            <li>banana</li>
            <li>muskmelon</li>
        </ol>
        <h1>{date.toLocaleTimeString()}</h1>
        <h1>{date.toLocaleDateString()}</h1>
       

        </>
    )
}
export default App3