import React, { useState } from 'react'
import { supabase } from '../Config/supabase';

function submitEvents() {
    const [formData,setFormData]=useState({
    title:"",
    desrciption:"",
    category:"",
    date:"",
    filePath:"",
    startTime:"",
    endTime:"",
    location:"",
    ticketPrice:"",
        organization:"",
        email:"",
        phone:""
    

})
const [image,setImage]=useState(null);
const handleChange=(e)=>{

  const {name,value}=e.target;
  setFormData(()=>{ return {...prev,[name]:value}});
}
const onSubmit=async()=>{


  let filePath=formData.organization+"/"+image.name;

  const {data,error}=supabase.storage.from("images").upload(filePath,image);
  console.log(data,error);
  if(!error){

    const {data,error}=supabase.from("Event").insert(formData)
  }


}
const handleSelectImage=(e)=>{

  let file=e.target.files[0];
  console.log(file)
  if(file){
    setImage(file);
  }

}

  return (
    
        <div className='mb-10'>
           <div className='w-full pl-52 pt-4'>
             <span className='text-6xl font-semibold'>Share your event</span>
            <p className='text-lg text-gray-700 wrap-break-word w-1/3 mt-5'>Got an exciting event coming up? Submit it here and reach thousands of students on campus. Our team will review your submission and get back to you within 24-48 hours.</p>

           </div>
       
      <div className='w-full'>
         <form action="#" className='flex flex-col justify-center items-center w-full'>
        <div className='flex flex-col border border-gray-300 shadow-2xl p-5 rounded-2xl w-1/2 gap-4'>
           <div className='flex flex-col'>
             <span className='text-2xl font-semibold'>Event Details</span>
        <span className='text-gray-700 '>Tell us about your event</span>
           </div>

        <div className='flex flex-col gap-2'>
            <label className='' htmlFor="title">Event Title</label>
            <input onChange={handleChange} className='focus:outline-none border border-gray-300 rounded-xl h-10 focus:border-accent' type="text" name="title" value={formData.title} id="title" />
        </div>
         <div className='flex flex-col gap-2'>
            <label htmlFor="description">Description</label>
            <textarea onChange={handleChange} value={formData.desrciption}className='focus:outline-none focus:border-accent h-10 border border-gray-300 rounded-xl' type="text" name="description" id="" required />
        </div>
        
         <div className='flex flex-col gap-2'>
            <label htmlFor="image">Category</label>
            <input onChange={handleChange} value={formData.category} className='focus:outline-none border border-gray-300 focus:border-accent h-10 p-2 rounded-xl' type="text" name="image" id="" required />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="image">Event Poster</label>
            <input onChange={handleSelectImage}  className='focus:outline-none border border-gray-300 focus:border-accent h-10 p-2 rounded-xl' type="file" accept='image/*'  name="image" id="" required />
        </div>
        
        
          <div className='flex flex-col'>
              <span className='text-2xl font-semibold'>Date & Time</span>
            <span className='text-gray-700'>When is your event happening</span>
          </div>

                 <div className='flex flex-col gap-2'>
            <label htmlFor="date">Date</label>
            <input onChange={handleChange} value={formData.date} className='border border-gray-300 focus:outline-none focus:border-accent h-10 rounded-xl' type="date" name="" id="" required />

            </div>
            <div className='flex flex-row gap-2 justify-evenly w-full '>
                 <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="startTime">Start Time</label>
            <input onChange={handleChange} value={formData.startTime} className='border border-gray-300 h-10 focus:border-accent rounded-xl ' type="time" name="startTime" id="" required />
        </div>
         <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="endTime">End Time</label>
            <input onChange={handleChange} value={formData.endTime} className='border border-gray-300 focus:border-accent h-10 rounded-xl' type="time" name="endTime" id="" required />
        </div>
            </div>
        
           <div className='flex flex-col '>
              <span className='text-2xl font-semibold '>Location & Capacity</span>
            <span className='text-gray-700'>Where will this event take place?</span>

           </div>
             <div className='flex flex-col gap-2'>
            <label htmlFor="location">Location</label>
            <input  onChange={handleChange} value={formData.location} className='border border-gray-300  h-10 focus:outline focus:border-accent rounded-xl' type="text" name="location" id="" required />
        </div>

         <div className='flex flex-col gap-2'>
            <label htmlFor="ticketPrice">Ticket Price</label>
            <input onChange={handleChange} value={formData.ticketPrice} className='border border-gray-300 h-10 focus:border-accent rounded-xl' type="text" name="ticetPrice" id="" required />
        </div>
       
          <div className='flex flex-col'>
              <span className='text-2xl font-semibold'>Organization Information</span>
            <span className='text-gray-700'>Tell us more about your organization</span>
          </div>

                 <div className='flex flex-col gap-2'>
            <label htmlFor="organization">Organization/Club</label>
            <input onChange={handleChange} value={formData.organization}  className='border border-gray-300 focus:outline-none focus:border-accent h-10 rounded-xl' type="text" name="organization" id="" required />

            </div>
            <div className='flex flex-row gap-2 justify-evenly w-full '>
                 <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} value={formData.email}  className='border border-gray-300 h-10 focus:border-accent rounded-xl ' type="email" name="email" id="" required />
        </div>
         <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="phone">Phone</label>
            <input onChange={handleChange} value={formData.phone}  className='border border-gray-300 focus:border-accent h-10 rounded-xl' type="tel" name="phone" id="" required />
        </div>
            </div>
        
       
       
        <div className='flex flex-row justify-between'>
            <input className='text-white bg-green-400 p-1 w-26 font-semibold rounded-xl cursor-pointer' type="button" value="Submit"  />
            <input className='text-white bg-red-400 p-1 w-26 font-semibold rounded-xl cursor-pointer' type="button" value="Cancel" />
        </div>
      </div>
       </form>

      </div>
        </div>
    
  )
}

export default submitEvents;