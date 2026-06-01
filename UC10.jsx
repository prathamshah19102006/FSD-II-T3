import React, { createContext } from 'react'
import UC11 from './UC11.jsx'
const Fname=createContext()
export default function UC10() {
  return (
    <div>
      <Fname.Provider value='student'>
        <UC11/>
      </Fname.Provider>
    </div>
  )
}
export {Fname}
