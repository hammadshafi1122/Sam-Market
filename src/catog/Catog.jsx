import React from 'react'
import { ReactDOM } from "react";

function Catog(props) {

  return (
        
<a className=" items-center bg-white border-2 h-[70rem] w-[40rem]  lg:border lg:border-gray-200 shadow md:flex-row md:h-[20rem] md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:h-[15rem]">

<div >
<div className='flex'>

<i class="fa fa-cog text-4xl my-[1.7rem] mx-[0.2rem]" aria-hidden="true"></i>

    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-400">{props.title}</h5>
        </div>
        </div>


        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-[1rem]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>











  )

}

export default Catog