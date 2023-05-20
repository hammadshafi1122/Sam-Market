import React from 'react'
import { EventHandler } from 'react'
import Filterproducts from '../Filterproducts/Filterproducts'
import {handleClick} from 'react'

function Filterbtn(handleClick) {

  return (
    <div className='space-y-4 my-[2rem]'>
        <div><p className='font-bold mx-[3rem] text-2xl '>Buy Original Products</p>
        </div>
        <div className='font-bold space-x-3 mx-[5.5rem]'>
            <button  className='visited:text-green-800 hover:text-green-800'>All</button>
            <button onClick={()=> handleClick()}>fruits</button>
            <button>Vegetables</button>
        </div>
    </div>
  )
}

export default Filterbtn