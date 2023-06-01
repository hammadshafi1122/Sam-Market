import React from 'react'

function footer() {
  return (
    <div className='bg-gradient-to-l from-slate-400  to-orange-400 ... h-[30rem] space-y-8 py-[2rem] px-[1rem] text-white sm:flex sm:h-[20rem] sm:space-x-[5rem] sm:p-[3rem] md:px-[6rem] md:space-x-[6rem] lg:space-x-[20rem] lg:px-[9rem] '>
      <div className=''>
        <ul className='space-y-1 my-[2rem] lg:space-y-2'>
          <li className='font-bold lg:text-2xl'>Follow Us </li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <ul  className='space-y-1 lg:space-y-2'>
          <li className='font-bold lg:text-2xl'>Links</li>
          <li>Schedule</li>
          <li>Speakers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul  className='space-y-1 lg:space-y-2'>
          <li className='font-bold lg:text-2xl'>Venus</li>
          <li>200 D-block Green lane USA</li>
          <li>odumark@contact.com</li>
          <li>+10 367 467 8934</li>
        </ul>
      </div>
    </div>
  )
}

export default footer