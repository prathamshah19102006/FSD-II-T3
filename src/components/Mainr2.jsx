import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Booking from'./Booking.jsx'
import Gallery from './Gallery.jsx'
import EHelp from './EHelp.jsx'
import Destination from './Destination.jsx'
import Nopage from'./Nopage.jsx'
function MainR1(){
   var data=[{image:'a.png',name:'kolkata',description:'rasgolla'},{image:'b.png',name:'gujarat',description:'fafda'},
        {image:'d.png',name:'RAJASTHAN',description:'good'},{image:'d.png',name:'kerela',description:'banana'}
    ]
    return(
        <>
        <Router>
            <div className='main-route'>
                <ul>
                    <li><Link to='/Destination'>👀destination👀</Link></li>
                    <li><Link to='/Booking'>👀booking👀</Link></li>
                    <li><Link to='/Gallery'>👀Gallery👀</Link></li>
                    <li><Link to='/EHelp'>👀Ehelp👀</Link></li>
                    <li><Link to='/Nopage'>🙏No page🙏</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/Destination' element={<Destination obj={data}/>}/>
                <Route path='/Booking' element={<Booking/>}/>
                <Route path='/Gallery' element={<Gallery/>}/>
                <Route path='/EHelp' element={<EHelp/>}/>
                <Route path='/Nopage' element={<Nopage/>}/>

            </Routes>
        </Router>
        </>
    )
}
export default MainR1