import React  from 'react'
function top() {
  return (
    <div className='bg-slate-200 flex h-[5rem] '>

      <div className='flex bg-slate-200 w-[56%] space-x-2 px-[0.5rem] py-[0.5rem] sm:w-[50%]  sm:px-[2rem] sm:space-x-8 lg:w-[80%]  lg:px-[5rem]'>
        <div className='py-[0.2rem]'><i class="fa fa-apple text-4xl text-orange-400 sm:text-5xl "   aria-hidden="true"></i>
</div>
        <div className='py-[0.5rem] sm:py-[0.5rem]'><p><b className='text-orange-200 text-2xl '>SAM</b> <b className='text-2xl text-green-800'>Market</b></p></div>
      </div>

      <div className='flex space-x-4 px-[1rem] py-[1rem] w-[44%] sm:px-[5rem] sm:space-x-8 lg:w-[20%] lg:px-[1rem]'>
      <div><i class="fa fa-user text-2xl" aria-hidden="true" 
      ></i></div>
      <div><i class="fa fa-bell-o text-2xl" aria-hidden="true"></i></div>
      <div><i class="fa fa-heart-o text-2xl" aria-hidden="true"></i>
</div>
      <div><i class="fa fa-shopping-cart text-2xl" aria-hidden="true"></i>
</div>
      </div>
    </div>
  )
}

export default top