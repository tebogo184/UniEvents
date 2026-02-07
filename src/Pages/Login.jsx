import React, { useState } from 'react'
import { supabase } from '../Config/supabase'

function Login() {
    const [user,setUser]=useState({email:"",password:""});

    const handleChange=(e)=>{

        const {name,value}=e.target;
        console.log(e.target);
        setUser((prev)=>{return{...prev,[name]:value}});
    }
    const login=async ()=>{
        if(user.email!=="" || user.password!==""){
            console.log(user);
            const {data,error}= await supabase.auth.signInWithPassword(user);

        if(error){
            console.log(error.message);
        }else{
            console.log(data)
        }
        }else{
            console.log("empty")
        }
        
    }
  return (
    <div className='flex justify-center  p-10  mb-5'>

        <form className='w-1/2 flex flex-col justify-center items-center gap-5 border border-gray-300 rounded-2xl shadow-2xl' action="">
            <span className='text-4xl font-semibold'>Login</span>

            <div className='pt-5 pl-20 pr-20  flex flex-col gap-5 w-full'>
                <div className=' flex flex-col gap-2 w-full'>
                <label className='' htmlFor="email">Email</label>
                <input className='focus:outline-none focus:border-accent w-full border h-10 border-gray-300 rounded-xl' onChange={handleChange} value={user.email} type="email" name="email" id="" />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='' htmlFor="password">Password</label>
                <input className='focus:outline-none focus:border-accent w-full border h-10 border-gray-300 rounded-xl'  onChange={handleChange} value={user.password} type="password" name="password" id="" />
            </div>
            </div>
            <div className=' pl-20 pr-20 pb-10 w-full '>
                <input className='border w-full bg-accent cursor-pointer text-white font-medium h-10 rounded-xl' onClick={login} type="button" value="Login" />
            </div>
        </form>
    </div>
  )
}

export default Login