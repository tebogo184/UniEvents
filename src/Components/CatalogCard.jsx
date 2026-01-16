import React from 'react'
import banner from '../assets/banner.png'
import { Bookmark, BookmarkCheck, BookMarked, Calendar, LocateFixedIcon, LocateIcon, MapPin, Save, SaveAll, Share, Share2 } from 'lucide-react';
function CatalogCard() {
  return (
    <div className='flex flex-col shadow-4xl rounded-3xl border border-gray-300'>
        <div className=''>
            <img src={banner} alt="catalog image" className='w-[575px] object-cover rounded-t-3xl'/>
           
        </div>
        <div className='p-5'>
           <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-2'>
               <Calendar size={26} color='orange'/>
                <span className='text-accent text-lg font-semibold'>Mar 15, 2024 ~ 6 00 PM</span>
            </div>
                <span className='font-semibold'>Social</span>
             </div>
            <div className='flex-col mt-5 border-b-3 border-gray-300 '>
               
                <span className='text-2xl font-bold '>Spring Festival 2024: A Night Under the Stars</span>
                <p className='text-gray-500 mt-5 mb-5'>Join us for the biggest campus celebration of the year! Spring Festival 2024.</p>
         </div>
         <div className='flex justify-between mt-5 '>
            <div className='flex gap-3 text-gray-500 '>
                <MapPin size={30}/>
                <span>Main Quad</span>
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