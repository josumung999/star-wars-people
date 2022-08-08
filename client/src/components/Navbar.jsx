import { Link } from '@nextui-org/react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link href='/'>People</Link>
      <Link href='/person'>Person</Link>
    </div>
  )
}

export default Navbar