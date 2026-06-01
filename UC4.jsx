import React from 'react'
import UC5 from './UC5.jsx'
import { createContext } from 'react'
 const N1=createContext()
 const N2=createContext()
export default function UC4() {
   

  return (
    <div>
      <N1.Provider value='5'>
        <N2.Provider value='10'>
            <UC5/>
        </N2.Provider>
      </N1.Provider>
    </div>
  )
}
export {N1,N2}
