import React, { useState } from 'react'
import filter from 'react'
const GallerReact =()=>
{
  const [items, setItems] =useState;
  const filterItem = (catogItem) =>
  {
    const updatedItems = filter((curElem)=>{
    return curElem.name===catogItem;
  });
  setItems(updatedItems);
  }
}


function Filterproducts(props) {
  return (
    

    <div className='border-2 border-gray-400 px-[5rem] py-[0.8rem] w-auto h-[26rem]  mx-[1.2rem] space-y-3 lg:space-y-2 lg:w-[18.7rem]'>
<img src={props.fruit} className='w-[10rem] h-[10rem]' alt="" />  
    <div><b className=' text-2xl mx-[2rem]'>{props.name}</b></div>
      <div className='mx-[2rem]'>weight 1 Kg</div>
      <div className='text-green-800 mx-[2.5rem]'>$ 16.00</div>
      <div className='flex space-x-4'>
        <div className='border-2 border-gray-400 px-[1rem] py-[0.5rem] '>-</div>
        <div className=' px-[1rem] py-[0.5rem] '>0</div>
        <div className='border-2 border-gray-400 px-[1rem] py-[0.5rem] '>+</div>
      </div>  
      <button className='bg-green-800 text-white p-[0.5rem] mx-[1.8rem] lg:h-[3rem] lg:mx-[1rem] lg:w-[8rem] hover:bg-green-600 hover:text-orange-200'>Shop Now</button>
    </div>
  )
}

export default Filterproducts