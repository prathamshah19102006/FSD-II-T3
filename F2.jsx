import React from 'react'
import { useContext } from 'react'
import { Appcontext } from './F1.jsx'
export default function F2() {
    const data=useContext(Appcontext)
  return (
    <div>
      <h1>
        {data.fname}
        {data.gender}
      </h1>
    </div>
  )
}
