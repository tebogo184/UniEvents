import React from 'react'
import  banner from '.././assets/banner.png'
import { Calendar, MapPin } from 'lucide-react'
function Event() {
  return (
    <div className=''>

        <div className='relative overflow-hidden w-full h-[600px] md:h-[700px]'>
                <img src={banner} alt="" className='absolute w-full h-full inset-0 object-cover object-top '/>
        </div>
        <div className='absolute bg-amber/4 inset-0'></div>
        <div className='flex  justify-center justify-items-center mt-10'>
                <div className='flex flex-col  justify-center justify-items-center gap-2 pb-24'>
                    <div className='border border-gray-300 shadow-xl rounded-4xl pb-10 pr-10 pl-10 pt-5'>
                      <span className='text-5xl font-semibold'>Spring Festival 2024: A Night Under the Stars</span>
                    <div className='flex flex-row gap-40 mt-10'>
                       <div className='flex flex-row gap-5'>
                         <div className=''>
                            <Calendar size={50} className='text-accent'/>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xl font-bold'>Saturday, March 15, 2024</span>
                            <span className='text-lg text-gray-500'>6:00 PM - 11:00 PM</span>
                        </div>
                       </div>
                        <div className='flex flex-row gap-5'>
                              <div className=''>
                            <MapPin size={50} className='text-accent'/>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xl font-bold'>Main Quad Road</span>
                            <span className='text-lg text-gray-500'>Central Building</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className='rounded-3xl border border-gray-300 shadow-2xl p-10'>
                      <span className='text-2xl font-bold'>About This Event</span>
                      <p className='max-w-3xl whitespace-pre-wrap leading-relaxed text-gray-700 text-xl mt-10'>
                        Join us for the biggest campus celebration of the year! Spring Festival 2024 promises to be an unforgettable night filled with live music, delicious food, and amazing company.

**What to Expect:**

- Live performances from 5 different bands

- Food trucks with cuisines from around the world

- Photo booths and interactive art installations

- Lawn games and activities

- Spectacular fireworks finale at 10 PM

This year's theme "A Night Under the Stars" will transform the Main Quad into a magical outdoor venue with string lights, cozy seating areas, and celestial decorations.

**Important Notes:**

- Please bring your student ID for entry

- No outside food or drinks allowed

- Event is weather permitting

- Free reusable water bottles for first 500 attendees
                      </p>
                    </div>
            </div>
           <div className=' '> 
             <div className=' ml-5 border border-gray-300 rounded-4xl p-7'>
              <div className='text-xl font-semibold mb-5'>Organized By</div>
               <div className='flex flex-row gap-5'>
                <img src={banner} alt="Organizer Image" className='object-contain rounded-2xl' width={120}/>
                <span className='text-xl font-semibold'>Student Abroad Activities</span>
               </div>
            </div>
            <div className='flex flex-row justify-between ml-5 mt-4 bg-accent p-5 rounded-2xl'>
              <div className='flex flex-col gap-5'>
                <span className='text-xl text-white '>Price</span>
                <span className='text-xl text-white'>Open to all Students</span>
              </div>
              <div className='text-4xl text-white font-semibold'>
                FREE
              </div>

            </div>
           </div>
        </div>
    </div>
  )
}

export default Event