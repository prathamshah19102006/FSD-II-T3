import React from 'react'
import { createContext } from 'react'
import UC10 from './UC10.jsx'
const C1=createContext()
const mycss={backgroundColor:'tomato',fontSize:'40px'}
export default function UC9() {
  return (
    <div>
      <C1.Provider value={mycss}>
        <UC10/>
      </C1.Provider>
    </div>
  )
}
export {C1}
