import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-row justify-between p-10 '>
        <div className=''>
            <div className=''>
                UniEvents
            </div>
        </div>
        <div className='flex flex-row justify-between'>
           <ul className='flex gap-10'>
            <li><Link to={"#"}>Home</Link></li>
            <li><Link to={"#"}>Categories</Link></li>
           </ul>
        </div>
        <div className='flex flex-row justify-between'>
            <ul className='flex gap-10'>
                <li className='p-3 cursor-pointer '><Link to={"#"}>Submit Event</Link></li>
                <li className='text-white font-semibold cursor-pointer p-3 bg-red-400 rounded-lg'><Link to={"#"}>Get Started</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar