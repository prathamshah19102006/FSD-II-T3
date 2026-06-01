import React, { useContext } from 'react'
import {C1} from './UC9.jsx'
import {Fname} from './UC10.jsx'
export default function UC11() {
    const first=useContext(C1)
    const name=useContext(Fname)
  return (
    <div>
      <h1 style={first}>👩‍🎓welcome {name}👩‍🎓</h1>
    </div>
  )
}
