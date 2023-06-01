import React from 'react'




function Products(props) {
  return (

    <div className='border-2 border-slate-400 h-[15rem] w-auto md:w-full mx-[1.2rem] py-[2rem] px-[1.1rem]'>
      <div className='flex space-x-4 lg:space-x-[9rem]'>
        <div> <img className='h-[9.5rem] w-[9.5rem] lg:h-[11rem] lg:w-[11rem] lg:mx-[2rem]' src={props.Orange} alt="" /></div>
        <div className='space-y-9'>
          <div className='space-y-2'>

          <b>{props.name}</b>
          <div>{props.volume}</div>
          <div><span className='text-slate-300'>{props.discount} </span><span className='text-green-700'>$ 16.00</span></div>
          <div></div>
          </div>
<div>

          <button className='bg-green-800 text-white px-[1rem] py-[0.5rem] sm:h-[3rem] sm:w-[8rem] hover:bg-green-600 hover:text-orange-200'>Shop Now</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Products