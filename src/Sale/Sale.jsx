import React from 'react'
import fruity from '../images/orangepic.png'
import fruity1 from '../images/fruity1.png'

function Sale() {
  return (
    <div className='space-y-4 py-[2rem] px-[1rem]  md:space-x-5 '>

    <div className=' border-2 border-slate-800 space-y-2 md:my-[1rem] md:mx-[1.1rem]  lg:flex lg:border-none lg:py-[0rem] lg:my-[4rem] lg:px-[7rem] lg:space-x-10'>
        <div><img className='w-full  lg:h-[20rem]' src={fruity} alt="" />
        </div>
        <div className='space-y-4 p-[1rem] lg:space-y-9'>
            <p className='font-bold  text-4xl'>Our Drinks</p>
            <p>Lorem, ipsum sectetu
                r adipisicing elit. <br />
                Quidem soluta cum unde qu
                ae quia <br /> aspernatur nisi offic
             </p>
             <button className='border-2 border-gray-800 p-[0.5rem] font-bold lg:border-2 lg:border-gray-200 lg:p-[0.5rem] hover:bg-green-600 hover:text-orange-200'>Shop Now</button>
        </div>
    </div>
    <div className='border-2 border-slate-800 space-y-2 md:my-[1rem] md:mx-[1.1rem]  lg:flex lg:border-none lg:py-[0rem] lg:my-[4rem] lg:px-[7rem] lg:space-x-10'>
        
        <div className='space-y-4 p-[1rem]  lg:space-y-9'>
            <p className='font-bold  text-4xl'>Fast Food Recipes</p>
            <p>Lorem, ipsum sectetu
                r adipisicing elit. <br />
                Quidem soluta cum unde qu
                ae quia <br /> aspernatur nisi offic
             </p>
             <button className='border-2 border-gray-800 p-[0.5rem] font-bold lg:border-2 lg:border-gray-5000 lg:p-[0.5rem] hover:bg-green-600 hover:text-orange-200'>Shop Now</button>
        </div>
        <div><img className='w-full  lg:mx-[16rem] lg:w-[30rem] lg:h-[20rem]' src={fruity1} alt="" />
        </div>
    </div>
    
</div>

  )
}

export default Sale