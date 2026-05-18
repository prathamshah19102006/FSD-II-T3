import './App.css'
import hero from './assets/hero.png'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App4 from './App4.jsx'
function App() {
  var name='SHAH PRATHAM SAMIRBHAI'
  return (
    <>
      <h1>welcome "{name}"</h1>
      
         <App2/>
      <App3/>
     <img src="a.png"/>
     <img src={hero}/>
     <App4/>
    </>
  )
}
export default App
