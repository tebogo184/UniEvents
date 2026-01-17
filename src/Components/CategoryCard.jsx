import { Trophy } from 'lucide-react';
import React from 'react'

function CategoryCard() {
  return (
    <div className='mt-10 flex flex-col rounded-3xl border-gray-300 shadow-2xl p-10 hover:border hover:border-accent'>
        <div className='flex justify-center '>
                    <Trophy size={60} color={"white"} className=' bg-accent p-2 rounded-2xl border border-accent shadow-2xl'/>
        </div>
                    <div className='font-semibold text-2xl flex justify-center mt-3'>Social</div>
        <div className='text-gray-400 mt-3'>Parties, mixers and hangouts</div>
        <div className='text-accent font-extrabold text-xl flex justify-center mt-3'>42 events</div>
    </div>
  )
}

export default CategoryCard;