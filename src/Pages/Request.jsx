import React, { useEffect, useState } from 'react'
import { supabase } from '../Config/supabase';
import { useParams } from 'react-router-dom';
import { Loader } from 'lucide-react';

function Request() {
     const [event,setEvent]=useState({});
     const {eventID}=useParams();
     const [hasLoaded,setHasLoaded]=useState(false);

     useEffect(()=>{

        const fetchData=async()=>{

            const {data,error}=await supabase.from("Event").select("*").eq("eventID",eventID)
            if(error){
                console.log(error);
            }else {
                setEvent(data[0]);
                console.log(data)
                console.log("Data")
                setHasLoaded(true)
            }
        }
        fetchData();
     },[])

     const formatDate=(date)=>{

        if(!date) return "";
    return new Intl.DateTimeFormat('en-ZA',{
      day:"2-digit",
      month:'short',
      year:"numeric"
    }).format(new Date(date));
  }
  
     const handleSubmit=async(status)=>{

        console.log(status)
        const {data,error}=await supabase.from("Event").update({"status":status}).eq("eventID",eventID).select();

        if(error){
            console.log(error);
        }else{
            console.log(data);
            window.alert("Sucessful");
        }

     }
   return (
  <>
  {hasLoaded?( <div className='mb-10'>
           
       <span className=''>{event.title}</span>
      <div className='w-full'>
         <form action="#" className='flex flex-col justify-center items-center w-full'>
           
<div className='flex flex-col border border-gray-300 rounded-2xl w-1/2 p-5 mt-10 shadow-2xl gap-5'>


        <div className='flex flex-col gap-2'>
            <label className='' htmlFor="title">Event Title</label>
            <input disabled  className='focus:outline-none border border-gray-300 rounded-xl h-10 focus:border-accent '  type="text" name="title" value={event.title} id="title" />
        </div>
         <div className='flex flex-col gap-2'>
            <label htmlFor="description">Description</label>
            <textarea  value={event.desrciption}className='focus:outline-none focus:border-accent h-10 border border-gray-300 rounded-xl' disabled type="text" name="description" id="" />
        </div>
        
        
        
          
                 <div className='flex flex-col gap-2'>
            <label htmlFor="date">Date</label>
            <input disabled  value={formatDate(event.date)} className='border border-gray-300 focus:outline-none focus:border-accent h-10' type="date" name="" id="" />

            </div>
            <div className='flex flex-row gap-2 justify-evenly w-full '>
                 <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="startTime">Start Time</label>
            <input disabled  value={event.startTime.slice(0,5)} className='border border-gray-300 h-10 focus:border-accent rounded-2xl ' type="time" name="startTime" id="" />
        </div>
         <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="endTime">End Time</label>
            <input disabled  value={event.endTime.slice(0,5)} className='border border-gray-300 focus:border-accent h-10 rounded-2xl' type="time" name="endTime" id="" />
        </div>
            </div>
    
          
             <div className='flex flex-col gap-2'>
            <label htmlFor="location">Location</label>
            <input disabled   value={event.location} className='border border-gray-300  h-10 focus:outline focus:border-accent rounded-2xl' type="text" name="location" id="" />
        </div>

         <div className='flex flex-col gap-2'>
            <label htmlFor="ticketPrice">Ticket Price</label>
            <input disabled  value={event.ticketFee} className='border border-gray-300 h-10 focus:border-accent rounded-2xl' type="text" name="ticetPrice" id="" />
        </div>
        

         

                 <div className='flex flex-col gap-2'>
            <label htmlFor="organization">Organization/Club</label>
            <input disabled  value={event.organizer}  className='border border-gray-300 focus:outline-none focus:border-accent h-10' type="text" name="organization" id="" />

            </div>
            <div className='flex flex-row gap-2 justify-evenly w-full '>
                 <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="email">Email</label>
            <input disabled  value={event.orgEmail}  className='border border-gray-300 h-10 focus:border-accent rounded-2xl ' type="email" name="email" id="" />
        </div>
         <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="phone">Phone</label>
            <input disabled  value={event.phoneNumber}  className='border border-gray-300 focus:border-accent h-10 rounded-2xl' type="tel" name="phone" id="" />
        </div>
            </div>
    
       
       
        <div className='flex flex-row justify-between'>
            <input onClick={()=> handleSubmit("approved")} className='text-white bg-green-400 p-1 w-26 font-semibold rounded-xl cursor-pointer'  type="button" value="Approve"  />
            <input onClick={()=> handleSubmit("declined")} className='text-white bg-red-400 p-1 w-26 font-semibold rounded-xl cursor-pointer'  type="button" value="Decline" />
        </div>
</div>
       </form>

      </div>
        </div>)
        :
                <div className=' bg-transparent flex justify-center justify-items-center text-9xl animate-spin transition-transform mb-24 mt-10 p-20 font-medium text-accent'><Loader size={50} /></div>

        }
  </>
  
  )
}

export default Request