import React, { useEffect, useState } from 'react'
import { supabase } from '../Config/supabase'
import { useNavigate } from 'react-router-dom';

function Approval() {
    const [events,setEvents]=useState([]);
    const navigate=useNavigate();

   useEffect(()=>{

    const fetchData=async()=>{

        const {data,error}=await supabase.from("Event").select("*").eq("status","pending");

        if(error){
            console.log(error)
        }else{
            setEvents(data);
            console.log(data)
        }
    }
    fetchData();
   },[])

   const formatDate=(date)=>{

    return new Intl.DateTimeFormat('en-ZA',{
      day:"2-digit",
      month:'short',
      year:"numeric"
    }).format(new Date(date));
  }
  const formatTime=(startTime,endTime)=>{

    return `${startTime.slice(0,5)} - ${endTime.slice(0,5)}`;
  }
  return (

    <div className='mb-5 mt-5' >

        <div className='flex flex-col  justify-center items-center overflow-x-auto px-10 '>
            <span className='text-3xl font-medium'>Event Request</span>
            <table className='mb-5 mt-5 border border-gray-300 shadow-sm rounded-2xl  min-w-full px-5'>
                
                <thead className='p-10 border-b border-gray-300 bg-gray-100'>
                <tr className='text-lg font-medium'>
                    <th className='px-16 py-3'>Event Title</th>
                    <th className='px-16 py-3'>Organizer</th>
                    <th className='px-16 py-3'>Date</th>
                    <th className='px-16 py-3'>Start Time</th>
                    <th className='px-16 py-3'>End Time</th>
                    <th className='px-16 py-3'>Actions</th>
                </tr>
                </thead>
                <tbody className='text-gray-700 font-medium'>
                    {events.map((event)=>{

                        return (
                            <tr key={event.eventID} className=''>
                        <td className='px-16 py-3'>{event.title}</td>
                        <td className='px-16 py-3'>{event.organizer}</td>
                        <td className='px-16 py-3'>{formatDate(event.date)}</td>
                        <td className='px-16 py-3'>{event.startTime.slice(0,5)}</td>
                        <td className='px-16 py-3'>{event.endTime.slice(0,5)}</td>
                        <td className='px-16 py-3'><button onClick={()=>navigate(`/UniEvents/request/${event.eventID}`)} type="button" className='hover:text-sky-600 cursor-pointer border-b hover:border-b-sky-400 '>View More</button></td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Approval