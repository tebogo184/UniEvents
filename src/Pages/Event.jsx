import React, { useEffect, useState } from 'react'
import Unavailable from '.././assets/Unavailable.png'
import { Calendar, Loader, MapPin } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { supabase } from '../Config/supabase';
function Event() {
  const { eventID } = useParams();
  const [event, setEvent] = useState({});
  const [hasData, setHasData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {

      const { data, error } = await supabase.from("Event").select().eq("eventID", eventID).single();

      if (error) {
        console.log(error);
      } else {
        setEvent(data);
        setHasData(true);
        console.log(data);
      }
    }
    fetchData();
  }, [])

  const formatDate = (date) => {

    return new Intl.DateTimeFormat('en-ZA', {
      day: "2-digit",
      month: 'short',
      year: "numeric"
    }).format(new Date(date));
  }
  const formatTime = (startTime, endTime) => {

    return `${startTime.slice(0, 5)} - ${endTime.slice(0, 5)}`;
  }
  return (
    <>
      {hasData ? (<div className=''>

        <div className='relative overflow-hidden w-full h-[600px] md:h-[700px]'>
          <img src={Unavailable} alt="" className='absolute w-full h-full inset-0 object-cover object-top ' />
        </div>
        <div className='absolute bg-amber/4 inset-0'></div>
        <div className='flex  justify-center justify-items-center mt-10'>
          <div className='flex flex-col  justify-center justify-items-center gap-2 pb-24'>
            <div className='border border-gray-300 shadow-xl rounded-4xl pb-10 pr-10 pl-10 pt-5'>
              <span className='text-5xl font-semibold'>{event.title}</span>
              <div className='flex flex-row gap-40 mt-10'>
                <div className='flex flex-row gap-5'>
                  <div className=''>
                    <Calendar size={50} className='text-accent' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-xl font-bold'>{formatDate(event.date)}</span>
                    <span className='text-lg text-gray-500'>{formatTime(event.startTime, event.endTime)}</span>
                  </div>
                </div>
                <div className='flex flex-row gap-5'>
                  <div className=''>
                    <MapPin size={50} className='text-accent' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-xl font-bold'>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='rounded-3xl border border-gray-300 shadow-2xl p-10'>
              <span className='text-2xl font-bold'>About This Event</span>
              <p className='max-w-3xl whitespace-pre-wrap leading-relaxed text-gray-700 text-xl mt-10'>{event.description}</p>
            </div>
          </div>
          <div className=' '>
            <div className=' ml-5 border border-gray-300 rounded-4xl p-7'>
              <div className='text-xl font-semibold mb-5'>{event.organizer}</div>
              <div className='flex flex-row gap-5'>
                <img src={Unavailable} alt="Organizer Image" className='object-contain rounded-2xl' width={120} />
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
      </div>)
        :
        <div className=' bg-transparent flex justify-center justify-items-center text-9xl animate-spin transition-transform mb-24 mt-10 p-20 font-medium text-accent'><Loader size={50} /></div>}
    </>)
}

export default Event