import React from 'react'
import { EventHandler } from 'react'
import Filterproducts from '../Filterproducts/Filterproducts'
import {handleClick} from 'react'

function Filterbtn(handleClick) {

  return (
    <div className='space-y-4 my-[2rem]'>
        <div><p className='font-bold mx-[3rem] text-2xl '>Buy Original Products</p>
        </div>
        <div className='font-bold space-x-8 mx-[5.5rem]'>
            <button  className='visited:text-green-800 hover:text-green-800 hover:bg-slate-200 hover:px-[1rem]'>All</button>
            <button onClick={()=> handleClick()} className='hover:bg-slate-200 hover:px-[0.5rem]'>fruits</button>
            <button className='hover:bg-slate-200 hover:px-[1rem]'>Vegetables</button>
        </div>
    </div>
  )
}

export default Filterbtn