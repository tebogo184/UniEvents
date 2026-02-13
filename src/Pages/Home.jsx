import React, { useEffect, useState } from 'react'
import banner from '../assets/banner.png'
import { Cat, Search, StepBack } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import CatalogCard from '../Components/CatalogCard'
import CategoryCard from '../Components/CategoryCard'
import { supabase } from '../Config/supabase'
import { useNavigate } from 'react-router-dom'
function Home() {

  const [events,setEvents]=useState([]);
  const navigate=useNavigate();

const [category,setCategory]=useState([{name:"Social",count:0},{name:"Academic",count:0},{name:"Sport",count:0},{name:"Cultural",count:0},{name:"Career",count:0}]);


  useEffect(()=>{

   
    
    fetchData();
  },[])

  const fetchData=async()=>{

      const {data,error}=await supabase.from('Event').select('*').limit(6);

      if(error){
        console.log(error);
      }else{
        setEvents(data);
        console.log(data);
      }
    }
    useEffect(()=>{

      

      
    const updatedCategories=category.map(cat=>({...cat,

      count:events.filter(event=> event.name===cat.name).length
     }))

     setCategory(updatedCategories);
    },[events]);
  return (
    <>
    {(events&& category)?(
      <><div className='relative w-full overflow-hidden h-[450px] md:h-[700px] '>
        <div className=''>
          <img src={banner} alt="Hero" className=' absolute inset-0 w-full h-full object-cover' />
        </div>
        <div className="absolute inset-0 bg-orange/50"></div>
        <div className='flex justify-center justify-items-center '>
          <div className='relative z-10 '>
            <div className='text-white font-bold  text-8xl wrap-break-word w-250'>Never Miss a Campus Moment</div>
            <p className='text-white text-3xl'>Discover concerts, workshops, sports games, and cultural festivals happening around your university. All in one place.</p>
            <div className='flex gap-5 mt-5'>
              <button className='flex gap-4 cursor-pointer hover:bg-amber-400 bg-primary-glow p-2 rounded-3xl' onClick={() => navigate("/UniEvents/events")}><span className='text-white text-3xl '>Explore Events</span><ArrowRight size={29} className='mt-2 text-white' /></button>
              <button className='border-4 border-white  rounded-3xl p-2 cursor-pointer' onClick={() => navigate("/UniEvents/submitEvent")}><span className='text-white text-3xl'>Submit Event</span></button>
            </div>
            <div className='flex border border-gray-300 rounded-xl justify-between mt-10 bg-white w-lg h-16 p-2'>
              <input type="text" placeholder='Search any events, categories or topics' className='rounded  w-md outline-none ' />
              <button className='cursor-pointer'><Search /></button>
            </div>
          </div>
        </div>
      </div><div className='flex  justify-center justify-items-center mt-10'>
          <div className='flex justify-between w-full max-w-6xl items-center'>
            <div className='flex flex-col gap-4'>
              <span className='text-accent text-lg font-bold'>WHAT IS HAPPENING</span>
              <span className='text-5xl font-semibold'>Upcoming Events</span>
            </div>
            <div className='flex gap-2 mt-5 border-3 cursor-pointer rounded-2xl p-3 border-amber-300'>
              <button onClick={() => navigate("/UniEvents/events")} className='text-xl'>View All Events</button>
              <ArrowRight size={22} className='mt-1' />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 p-16 gap-10 justify-center mt-14'>
          {events.map((event) => {
            return <CatalogCard key={event.eventID} {...event} />
          })}
        </div><div className='flex justify-center justify-items-center mt-14'>
          <div className='flex flex-col'>
            <span className='flex justify-center text-xl text-accent font-bold'>BROWSE BY</span>
            <span className='flex justify-center text-5xl mt-5 font-semibold'>Event Categories</span>
            <span className='mt-7 wrap-break-word text-xl text-gray-600'>Find Exactly what you're looking for.From academic workshops to parties, we've got it all</span>

          </div>
        </div><div className='flex justify-center justify-items-center mb-10 gap-3'>
          {category.map((cat) => {

            return (<CategoryCard key={cat.name} {...cat} />)
          })}
        </div></>
    )
    : 
    <div className=' bg-transparent flex justify-center justify-items-center text-9xl animate-spin transition-transform mb-24 mt-10 p-20 font-medium text-accent'><Loader size={50} /></div>}
    </>
  )
}

export default Home