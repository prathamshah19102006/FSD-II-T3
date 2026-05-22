import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home1 from'./Home1.jsx'
import Productlist from './Productlist.jsx'
import Nopage from'./Nopage.jsx'
function MainR1(){
     var data=[{name:'jatin',price:'200',image:'a.png'},{name:'jyoti',price:'300',image:'b.png'}
    ,{name:'bhavya',price:'400',image:'d.png'}
  ]
    return(
        <>
        <Router>
            <div className='main-route'>
                <ul>
                    <li><Link to='/'>🤞Home🤞</Link></li>
                    <li><Link to='/Productlist'>👀product list👀</Link></li>
                    <li><Link to='/Nopage'>🙏No page🙏</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home1/>}/>
                <Route path='/Productlist' element={<Productlist info={data}/>}/>
                <Route path='/Nopage' element={<Nopage/>}/>

            </Routes>
        </Router>
        </>
    )
}
export default MainR1