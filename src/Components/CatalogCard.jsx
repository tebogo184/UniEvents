import React from 'react'
import image from '../assets/unavailable.png'
import { Bookmark, BookmarkCheck, BookMarked, Calendar, LocateFixedIcon, LocateIcon, MapPin, Save, SaveAll, Share, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function CatalogCard({eventID,date,startTime,endTime,category,title,location,comment}) {

  const navigate=useNavigate();
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
    <div className='flex flex-col shadow-4xl rounded-3xl border border-gray-300 hover:cursor-pointer' onClick={()=> navigate(`/UniEvents/events/${eventID}`)}>
        <div className=''>
            <img src={image} alt="catalog image" className='w-[450px] object-cover rounded-t-3xl'/>
           
        </div>
        <div className='p-5'>
           <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-2'>
               <Calendar size={26} color='orange'/>
                <span className='text-accent text-lg font-semibold'>{`${formatDate(date)} ~ ${formatTime(startTime,endTime)}`}</span>
            </div>
                <span className='font-semibold'>{category}</span>
             </div>
            <div className='flex-col mt-5 border-b-3 border-gray-300 '>
               
                <span className='text-2xl font-bold '>{title}</span>
                <p className='text-gray-500 mt-5 mb-5'>{comment}</p>
         </div>
         <div className='flex justify-between mt-5 '>
            <div className='flex gap-3 text-gray-500 '>
                <MapPin size={30}/>
                <span>{location}</span>
            </div>
            <div className='flex gap-5'>
              <Bookmark size={30} color='black' className='hover:size-8 cursor-pointer'/>
              <Share2 size={30} color='black' className='hover:size-8 hover:font-extrabold cursor-pointer'/>
            </div>
         </div>
        </div>
    </div>
  )
}

export default CatalogCard;