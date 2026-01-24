import { Filter, Search } from 'lucide-react'
import React from 'react'
import CatalogCard from '../Components/CatalogCard'

function AllEvents() {
  return (
    <div className='flex flex-col'> 
        <div className='flex flex-col justify-center pl-60 pr-52 pt-10 gap-2'>
            <span className='text-4xl font-bold'>All Events</span>
        <span className='text-xl text-gray-700 '>
            Discover what's happening on campus
        </span>
        <div className='flex flex-row gap-15 w-375 mt-10'>
            <div className='flex flex-row w-full border border-gray-300 p-4 rounded-3xl'>
                <input className='w-full focus:outline-none text-lg' type="text" name="" id="" placeholder='Search any events or topics' />
                <button className='cursor-pointer' type="button"><Search size={30}/></button>
            </div>
            <button className='cursor-pointer border-3 rounded-3xl p-4 border-accent font-semibold' type="button"><span className='flex flex-row text-xl gap-4'><Filter size={25}/>Filters</span></button>
        </div>
        <div className='mt-5'>
            <ul className='flex flex-row gap-10 text-gray-700'>
                <li className='border pl-10 pr-10 pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-pointer'>All</li>
                <li className='border pl-10 pr-10 pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-point'>Social</li>
                <li className='border pl-10 pr-10 pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-pointer'>Academic</li>
                <li className='border pl-10 pr-10 pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-pointer'>Sports</li>
                <li className='border pl-10 pr-10 pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-pointer'>Cultural</li>
                <li className='border pl-10 pr-10 pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-pointer'>Career</li>
            </ul>
        </div>
        <span className='text-gray-700 text-lg'>Showing 8 Events</span>
        </div>
    <div className='flex justify-center justify-items-center mt-10'>
        <CatalogCard/>
    </div>
    </div>
  )
}

export default AllEvents