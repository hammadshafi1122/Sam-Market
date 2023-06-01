import React, { useState } from 'react'
import Rabbit from '../images/rabbit.png'
import {GiHamburgerMenu} from 'react-icons/gi';

function Navbar() {
    let [open,setOpen]=useState(false);
    
  return (
    <>
    <div className='bg-slate-200 md:h-[32rem] lg:w-[84.3rem]'>
        <div className=''>

        <div className='bg-white  flex px-[1rem] border-2 rounded-none w-[20rem] mx-[1rem] p-[0.5rem] space-x-5 sm:w-[35rem] sm:justify-between md:w-[45rem]'>
            <div className=''><input type="text" placeholder='Type search that is gross' className=' outline-none w-[20rem] h-[2rem]' /></div>
            <button className='border-black  rounded-none p-[0.2rem] bg-slate-200 lg:px-[2rem] hover:bg-slate-400'>

            <i class="fa fa-search" aria-hidden="true"></i>
            search
            </button> 
        </div>
        </div>
<div className='h-[4rem]'>


        <div className='flex bg-slate-200 h-[4rem] py-[1rem] sm:mx-[1rem] md:mx-[5.5rem] '>
            <ul className='flex space-x-2 sm:space-x-5 sm:mx-[4rem] md:space-x-9 md:mx-[2rem] lg:mx-[-4.3rem] lg:space-x-[2.42rem] lg:text-xl' >
                <li className='cursor-pointer hover:bg-slate-400 px-[0.3rem] py-[0.1rem] lg:px-[1rem] rounded-md hover:text-white'>Home</li>
                <li className='cursor-pointer hover:bg-slate-400 px-[0.3rem] py-[0.1rem] lg:px-[1rem] rounded-md hover:text-white'>Shops</li>
                <li className='cursor-pointer hover:bg-slate-400 px-[0.3rem] py-[0.1rem] lg:px-[1rem] rounded-md hover:text-white'>Pages</li>
                <li className='cursor-pointer hover:bg-slate-400 px-[0.3rem] py-[0.1rem] lg:px-[1rem] rounded-md hover:text-white'>Blogs</li>
                <li className='cursor-pointer hover:bg-slate-400 px-[0.3rem] py-[0.1rem] lg:px-[1rem] rounded-md hover:text-white'>About </li>
                <li className='cursor-pointer hover:bg-slate-400 px-[0.3rem] py-[0.1rem] lg:px-[1rem] rounded-md hover:text-white'>Contact</li>
            </ul>
        </div>

        </div>


    <div className='bg-gradient-to-r from-orange-500 to-orange-200 ... ... h-[39rem] lg:w-[84.3rem] absolute py-[1rem]  space-y-3 sm:absolute sm:h-[48rem]  md:space-y-4 lg:h-[32.2rem]  lg:my-[0.5rem] '>
        <div className='lg:my-[3rem]'><b className='text-3xl mx-[0.5rem] inline-block sm:mx-[8rem] md:mx-[12rem] lg:text-6xl lg:mx-[3rem]'>Healthy Food & Organic <p className='mx-[7.5rem] sm:mx-[8rem]  md:mx-[8rem] lg:inline-block lg:my-[1rem] lg:mx-[15.5rem]'> Market</p></b></div>
        <div className='mx-[6rem]  sm:mx-[15rem] md:mx-[19rem] lg:inline-block lg:mx-[20rem]'>All Natural Products</div>
        <div><button className='my-[25.5rem] p-[0.5rem] bg-green-700 text-white mx-[7rem] sm:mx-[15rem] sm:my-[35rem] md:mx-[20rem] lg:my-[2rem] lg:mx-[20rem] lg:px-[2rem] lg:py-[1rem] hover:bg-green-600 hover:text-orange-200'>SHOP NOW</button></div>

    </div>
    <div>
<img className='relative my-[9rem] sm:relative sm:mx-[4rem] md:mx-[9rem] lg:relative lg:-my-[7.3rem] lg:mx-[46rem] lg:h-[35rem]' src={Rabbit} alt="" />

    </div>
</div>
    </>

  )
}

export default Navbar