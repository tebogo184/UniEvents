import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-row justify-between pt-4 pb-3 pl-52 pr-52 bg-border '>
        <div className=''>
            <div className='text-3xl font-bold text-accent'>
                UniEvents
            </div>
        </div>
        <div className='flex flex-row justify-between text-2xl '>
           <ul className='flex gap-10 text-black/40'>
            <li className='hover:bg-white hover:rounded-2xl p-2'><Link to={"#"}>Home</Link></li>
            <li className='hover:bg-white hover:rounded-2xl p-2'><Link to={"#"}>Events</Link></li>
            <li className='hover:bg-white hover:rounded-2xl p-2'><Link to={"#"}>Categories</Link></li>
           </ul>
        </div>
        <div className='flex flex-row justify-between'>
            <ul className='flex gap-10'>
                <li className='p-3 cursor-pointer font-semibold shadow-accent bg-white rounded-2xl border border-accent '><Link to={"#"}>Submit Event</Link></li>
                <li className='text-white font-semibold cursor-pointer p-3 bg-primary rounded-lg'><Link to={"#"}>Get Started</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar