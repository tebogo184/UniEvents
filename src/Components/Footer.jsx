import { Calendar, Camera, Instagram, Stars, X } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white pl-56 pr-56 pt-10 pb-10'>

        <div className='flex flex-row justify-between gap-5 border-b-4 border-gray-800 pb-5 '>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-2'>
                    <Calendar size={45} className='bg-accent text-white p-2 rounded-2xl'/>
                    <span className='text-2xl font-semibold'>UniEvents</span>
                </div>
                <p className='text-lg wrap-break-word '>Your one stop platform for discovering everything happening on campus</p>
                <div className='flex flex-row gap-3' >
                    <X size={40} className='border border-gray-800 p-2 rounded-2xl bg-gray-800 cursor-pointer'/>
                    <Camera size={40} className='border border-gray-800 p-2 rounded-2xl bg-gray-800 cursor-pointer'/>
                </div>
            </div>
            <div className='flex flex-col text-xl gap-3'>
                <span className='text-white font-semibold '>Quick Links</span>
                <span className='text-gray-300'>Browse Events</span>
                <span className='text-gray-300'>Categories</span>
                <span className='text-gray-300'>Submit Event</span>
            </div>
            <div className='flex flex-col text-xl gap-3'>
                <span className='text-white font-semibold'>Support</span>
                <span className='text-gray-300'>Help Center</span>
                <span className='text-gray-300'>Contact Us</span>
                <span className='text-gray-300'>Terms of Service</span>
                <span className='text-gray-300'>Privacy Policy</span>
            </div>
            <div className='flex flex-col text-xl gap-3'>
                <span className='font-semibold'>Stay Updated</span>
                <span className='text-gray-400'>Get weekly event highlists delivered to your mail</span>
                <div className='flex flex-row gap-3'>
                    <input type="email" name="" id=""  className='border border-white rounded-lg text-sm p-2 bg-gray-900' placeholder='eg. your@gmail.com'/>
                    <button type="button" className='border p-2 rounded-2xl bg-accent border-accent cursor-pointer' ><Stars size={30} className=''/></button>
                </div>
            </div>
        </div>
        <div className='mt-3'>
            <span className='text-gray-300 text-lg '>© 2024 UniEvents. Made with ❤️ for students.</span>
        </div>
    </div>
  )
}

export default Footer