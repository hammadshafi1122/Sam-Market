import React from 'react'
import Rabbit from '../images/rabbit.png'
function Navbar() {
  return (
    <>
    <div className='bg-slate-200 md:h-[32rem]'>
        <div className=''>

        <div className='bg-white  flex px-[1rem] border-2 rounded-none w-[20rem] mx-[1rem] p-[0.5rem] space-x-5 sm:w-[35rem] sm:justify-between md:w-[45rem]'>
            <div className=''><input type="text" placeholder='Type search that is gross' className='border-none' /></div>
            <button className='border-black  rounded-none p-[0.2rem] bg-slate-200 lg:px-[2rem]'>

            <i class="fa fa-search" aria-hidden="true"></i>
            search
            </button> 
        </div>
        </div>

        <div className='flex bg-slate-200 h-[4rem] py-[1rem] sm:mx-[1rem] md:mx-[5.5rem] '>
            <ul className='flex px-[0.5rem] space-x-2 sm:space-x-12'>
                <li>Home</li>
                <li>Shops</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>About us</li>
                <li>Contact Us</li>
            </ul>
        </div>

    <div className='bg-gradient-to-r from-orange-500 to-orange-200 ... ... h-[39rem] w-[100%] absolute py-[1rem]  space-y-3 sm:absolute sm:h-[48rem]  md:space-y-4 lg:h-[32.2rem]  lg:my-[0.5rem] '>
        <div className='lg:my-[3rem]'><b className='text-3xl mx-[0.5rem] inline-block sm:mx-[8rem] md:mx-[12rem] lg:text-6xl lg:mx-[3rem]'>Healthy Food & Organic <p className='mx-[7.5rem] sm:mx-[8rem]  md:mx-[8rem] lg:inline-block lg:my-[1rem] lg:mx-[15.5rem]'> Market</p></b></div>
        <div className='mx-[6rem]  sm:mx-[15rem] md:mx-[19rem] lg:inline-block lg:mx-[20rem]'>All Natural Products</div>
        <div><button className='my-[25.5rem] p-[0.5rem] bg-green-700 text-white mx-[7rem] sm:mx-[15rem] sm:my-[35rem] md:mx-[20rem] lg:my-[2rem] lg:mx-[20rem] lg:px-[2rem] lg:py-[1rem] '>SHOP NOW</button></div>

    </div>
    <div>
<img className='relative my-[9rem] sm:relative sm:mx-[4rem] md:mx-[9rem] lg:relative lg:-my-[7.3rem] lg:mx-[46rem] lg:h-[35rem]' src={Rabbit} alt="" />

    </div>
</div>
    </>

  )
}

export default Navbar