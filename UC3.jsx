import React from 'react'
import { useContext } from 'react'
import { Fname,Lname } from './UC1'
export default function UC3() {
    const first=useContext(Fname)
    const last=useContext(Lname)
  return (
    <div>
      <h1>given name by king is {first} {last}</h1>
    </div>
  )
}
