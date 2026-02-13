import { Filter, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import CatalogCard from '../Components/CatalogCard'
import { supabase } from '../Config/supabase'

function AllEvents() {

    const [category,setCategory]=useState("All");
    const [events, setEvents]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{

            const {data,error}= await supabase.from("Event").select("*");

            if(error){
                console.log(error);
            }else{
                setEvents(data);
                console.log(data); 
            }
            }
            fetchData();
        },[])

        const handleCategoryFilter=(cat)=>{
            
           if(cat==="All"){
            fetchData();
           }else {
            const filterdData=events.filter(event=> event.category===cat);
            setEvents(filterdData);
           }
            
        }
  return (
    <div className='flex flex-col mb-10'> 
        <div className='flex flex-col justify-center   pt-10 gap-2'>
            <span className='text-4xl font-bold'>All Events</span>
        <span className='text-xl text-gray-700 '>
            Discover what's happening on campus
        </span>
        <div className='flex flex-row gap-5 w-375 mt-10'>
            <div className='flex flex-row w-full border border-gray-300 p-4 rounded-3xl'>
                <input className='w-full focus:outline-none text-lg' type="text" name="" id="" placeholder='Search any events or topics' />
                <button className='cursor-pointer' type="button"><Search size={30}/></button>
            </div>
            <button className='cursor-pointer border-3 rounded-3xl p-4 border-accent font-semibold' type="button"><span className='flex flex-row text-xl gap-4'><Filter size={25}/>Filters</span></button>
        </div>
        <div className='mt-5'>
            <ul className='flex flex-row gap-10 text-gray-700 ml-1'>
                <li onClick={()=> handleCategoryFilter("All")} className=' border pl-10 pr-10  pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-pointer'>All</li>
                <li onClick={()=> handleCategoryFilter("Social")} className='border pl-10 pr-10  pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-point'>Social</li>
                <li onClick={()=> handleCategoryFilter("Academic")} className='border pl-10 pr-10  pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-pointer'>Academic</li>
                <li onClick={()=> handleCategoryFilter("Sport")} className='border pl-10 pr-10  pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-pointer'>Sports</li>
                <li onClick={()=> handleCategoryFilter("Cultural")} className='border pl-10 pr-10  pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-pointer'>Cultural</li>
                <li onClick={()=> handleCategoryFilter("Career")} className='border pl-10 pr-10  pt-2 pb-2 rounded text-lg border-gray-300 hover:border-accent cursor-pointer'>Career</li>
            </ul>
        </div>
        <span className='text-gray-700 text-lg'>Showing {events.length} Events</span>
        </div>
    <div className='grid grid-cols-3 p-16 gap-10 justify-center mt-14'>
          {events.map((event) => {
            return <CatalogCard key={event.eventID} {...event} />
          })}
        </div>
    </div>
  )
}

export default AllEvents;