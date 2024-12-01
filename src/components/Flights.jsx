"use client"
import React , { useState } from 'react'

const FlightsComponent = () => {
    const [value , setValue] = useState(0)
    setTimeout(() => {
        setValue(value + 1)
    } , 2000)
    if(value ===   1){
        throw new Error('e')
    }
  return (
    <div>Flights Component</div>
  )
}

export default FlightsComponent