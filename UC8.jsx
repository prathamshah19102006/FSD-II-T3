import React from 'react'
import { useContext } from 'react'
import {N1,N2} from './UC4.jsx'
export default function UC8() {
    const n1=parseInt(useContext(N1))
    const n2=parseInt(useContext(N2))
  return (
    <div>
      <h1>answer is {n1*n2}</h1>
    </div>
  )
}
