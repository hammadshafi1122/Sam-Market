import React from 'react'

function News(props) {
  return (
    <div className='py-[1rem] space-y-10 bg-slate-300   lg:h-[35rem] flex px-[1rem] space-x-4'>
      <div className='space-y-4 lg:space-y-3 '>

          <div className=''><img className='w-[50rem] md:w-[25rem]  lg:w-[26rem]' src={props.picture} alt="" />
          </div>
          <div className=''>

          <div>Mix & Cream vegetables</div>
          <div className='font-bold text-2xl '>{props.name}</div>
          <div>
            june 15, 2023
          </div>
          <div> Lorem ipsum dolor sit amet c
            onsectetur adipisici <br />
            g elit. Sed corporis cumque distinct <br />
            io quisquam necessitatibus consectetur <br />
             nobis quos ipsam doloribusa
             b optio voluptate ullam?</div>
          <div className='font-bold text-green-800 underline hover:bg-green-600 hover:text-orange-400 hover:inline-block hover:px-[0.5rem] hover:py-[0.1rem]'>
            Read More
          </div>
          </div>
          </div>

        

    </div>
  )
}

export default News