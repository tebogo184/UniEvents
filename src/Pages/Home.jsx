import React from 'react'
import banner from '../assets/banner.png'
import { Cat, Search, StepBack } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import CatalogCard from '../Components/CatalogCard'
function Home() {
  return (
    <>
    <div className='relative w-full overflow-hidden h-[450px] md:h-[700px] '>
     <div className=''>
       <img src={banner} alt="Hero" className=' absolute inset-0 w-full h-full object-cover' />
     </div>
      <div className="absolute inset-0 bg-orange/50"></div>
   <div className='flex justify-center justify-items-center '>
  <div className='relative z-10 '>
      <div className='text-white font-bold  text-8xl wrap-break-word w-250'>Never Miss a Campus Moment</div>
      <p className='text-white text-3xl'>Discover concerts, workshops, sports games, and cultural festivals happening around your university. All in one place.</p>
       <div className='flex gap-5 mt-5'>
      <button className='flex gap-4 cursor-pointer hover:bg-amber-400 bg-primary-glow p-2 rounded-3xl' onClick={null}><span className='text-white text-3xl '>Explore Events</span><ArrowRight size={29} className='mt-2 text-white'/></button>
      <button className='border-4 border-white  rounded-3xl p-2 cursor-pointer'><span className='text-white text-3xl'>Submit Event</span></button>
     </div>
     <div className='flex border border-gray-300 rounded-xl justify-between mt-10 bg-white w-lg h-16 p-2'>
      <input type="text" placeholder='Search any events, categories or topics' className='rounded  w-md outline-none ' />
      <button className='cursor-pointer'><Search/></button>
     </div>
     </div>
   </div>
    </div>

    {/**Upcoming Events (Resend)*/}
    <div className='flex  justify-center justify-items-center mt-10'>
      <div className='flex justify-between w-full max-w-6xl items-center'>
        <div className='flex flex-col gap-4'>
         <span className='text-accent text-lg font-bold'>WHAT IS HAPPENING</span>
        <span className='text-5xl font-semibold'>Upcoming Events</span>
        </div>
        <div className='flex gap-2 mt-5 border-3 cursor-pointer rounded-2xl p-3 border-amber-300'>
          <button className='text-xl'>View All Events</button>
          <ArrowRight size={22} className='mt-1'/>
        </div>
      </div>
    </div>
    <div className='flex justify-center mt-14'>
     <CatalogCard/>
    </div>
    </>
  )
}

export default Home