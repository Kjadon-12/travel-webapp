import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-orange-200'>
    <div className='flex w-full justify-between p-4 '>
      <h2 className='text-3xl font-semibold text-orange-800'>AeroTickets</h2>
      <div className='flex justify-between text-lg font-normal text-orange-800 items-between gap-x-5'> 
      <div><Link href={'/'}>Home</Link></div>
        <div>Flights</div>
        <div>Hotels</div>
        <div>SignIn/SignUp</div>
        


      </div>
    </div>
    </div>
  )
}

export default Header