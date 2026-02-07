import React, { useState } from 'react'

function Request() {
     const [formData,setFormData]=useState({
        title:"",
        desrciption:"",
        category:"",
        image:"",
        date:"",
        startTime:"",
        endTime:"",
        location:"",
        ticketPrice:"",
            organization:"",
            email:"",
            phone:""
        
    
    })
   return (
   <div className='mb-10'>
           
       <span className=''>Event Title</span>
      <div className='w-full'>
         <form action="#" className='flex flex-col justify-center items-center w-full'>
           
<div className='flex flex-col border border-gray-300 rounded-2xl w-1/2 p-5 mt-10 shadow-2xl gap-5'>


        <div className='flex flex-col gap-2'>
            <label className='' htmlFor="title">Event Title</label>
            <input disabled  className='focus:outline-none border border-gray-300 rounded-xl h-10 focus:border-accent '  type="text" name="title" value={formData.title} id="title" />
        </div>
         <div className='flex flex-col gap-2'>
            <label htmlFor="description">Description</label>
            <textarea  value={formData.desrciption}className='focus:outline-none focus:border-accent h-10 border border-gray-300 rounded-xl' disabled type="text" name="description" id="" />
        </div>
        
         <div className='flex flex-col gap-2'>
            <label htmlFor="image">Event Title</label>
            <input disabled  value={formData.category} className='focus:outline-none border border-gray-300 focus:border-accent h-10 p-2' type="file" name="image" id="" />
        </div>
        
          
                 <div className='flex flex-col gap-2'>
            <label htmlFor="date">Date</label>
            <input disabled  value={formData.date} className='border border-gray-300 focus:outline-none focus:border-accent h-10' type="date" name="" id="" />

            </div>
            <div className='flex flex-row gap-2 justify-evenly w-full '>
                 <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="startTime">Start Time</label>
            <input disabled  value={formData.startTime} className='border border-gray-300 h-10 focus:border-accent rounded-2xl ' type="time" name="startTime" id="" />
        </div>
         <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="endTime">End Time</label>
            <input disabled  value={formData.endTime} className='border border-gray-300 focus:border-accent h-10 rounded-2xl' type="time" name="endTime" id="" />
        </div>
            </div>
    
          
             <div className='flex flex-col gap-2'>
            <label htmlFor="location">Location</label>
            <input disabled   value={formData.location} className='border border-gray-300  h-10 focus:outline focus:border-accent rounded-2xl' type="text" name="location" id="" />
        </div>

         <div className='flex flex-col gap-2'>
            <label htmlFor="ticketPrice">Ticket Price</label>
            <input disabled  value={formData.ticketPrice} className='border border-gray-300 h-10 focus:border-accent rounded-2xl' type="text" name="ticetPrice" id="" />
        </div>
        

         

                 <div className='flex flex-col gap-2'>
            <label htmlFor="organization">Organization/Club</label>
            <input disabled  value={formData.organization}  className='border border-gray-300 focus:outline-none focus:border-accent h-10' type="text" name="organization" id="" />

            </div>
            <div className='flex flex-row gap-2 justify-evenly w-full '>
                 <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="email">Email</label>
            <input disabled  value={formData.email}  className='border border-gray-300 h-10 focus:border-accent rounded-2xl ' type="email" name="email" id="" />
        </div>
         <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="phone">Phone</label>
            <input disabled  value={formData.phone}  className='border border-gray-300 focus:border-accent h-10 rounded-2xl' type="tel" name="phone" id="" />
        </div>
            </div>
    
       
       
        <div className='flex flex-row justify-between'>
            <input className='text-white bg-green-400 p-1 w-26 font-semibold rounded-xl cursor-pointer'  type="button" value="Approve"  />
            <input className='text-white bg-red-400 p-1 w-26 font-semibold rounded-xl cursor-pointer'  type="button" value="Decline" />
        </div>
</div>
       </form>

      </div>
        </div>
  
  )
}

export default Request