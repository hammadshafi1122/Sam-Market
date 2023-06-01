import './App.css';
import React from 'react';
import Top from './top/Top';
import Footer from './footer/Footer';
import Navbar from './Navbar/Navbar';
import contents from './content';
import Products from './Products/Products';
import Orange1 from './images/orange.png';
import Orange2 from './images/beetle.png';
import Filterproducts from './Filterproducts/Filterproducts';
import fruit1 from "./images/cornucopia.png";
import fruit2 from "./images/fruits.png";
import fruit3 from "./images/broccoli.png";
import fruit4 from "./images/grape.png"

import Catog from './catog/Catog'
import Filterbtn from './filterbtn/Filterbtn';
import Clientsay from './clientsay/Clientsay';
import Clienttop from './Clienttop/Clienttop';
import Clientimage from './Clientimage/Clientimage'
import Sale from './Sale/Sale'
import News from './News&blogs/News'
import Newstop from './News&blogs/Newstop';
import News0 from './images/news.png'
import News1 from './images/news1.png'
import News2 from './images/news2.png'

function App() {
  return (
    <>
    <div className='max-w-[100rem]'>

        <Top/>
        <Navbar/>
      
               
        <div className="md:h-[18rem] md:my-[23rem] lg:my-[7.8rem] lg:h-[8rem] lg:flex">
        <Catog title="Specificatoin 
        100%"/>
        <Catog title="Buy And Get 50% Off"/>
        <Catog title="Sale And Products"/>
        <Catog title="Classic Products"/>
      


        </div>
                   
        <div className='space-y-8'>
          <div className='mx-[1rem]  text-2xl sm:mx-[9rem] md:mx-[13rem] md:py-[1rem] lg:mx-[32rem]'><b>Order Now And Get <span className='text-orange-500'>50% Off</span>  </b></div>
              <div className='space-y-2 sm:space-y-0 sm:flex md:flex lg:flex md:w-full'>

            <Products Orange={Orange1} name="Orange" volume="500 Gm" discount="$ 32.00"/>
            <Products Orange={Orange2} name="Peppemint" volume="800 Gm" discount="$ 32.00"/>
            </div>

            </div>
            <div>

            <Filterbtn handleClick="handleClick"/>
            </div>

            <div className='space-y-2 my-[2rem] lg:flex lg:space-y-0 '>

<Filterproducts fruit={fruit1} name="Capasium" key="fruits"/>
<Filterproducts fruit={fruit2} name="Tomato" key="fruits"/>
<Filterproducts fruit={fruit3} name="Onion" key="Vegetables"/>
<Filterproducts fruit={fruit4} name="Lemon" key="Vegetables"/>

</div>
<div className='bg-slate-300 h-[50rem] sm:h-[57rem] md:h-[40rem] space-y-2 w-100% lg:justify-around'>
<Clienttop/>
<div className='md:flex'>

<Clientimage/>
<Clientsay/>
</div>


</div>



<Sale/>
<div className='bg-slate-300'>

<Newstop/>
<div className=' lg:flex'>


<News picture={News0} name="Cleansing The Body of Parasites" />
<News picture={News1} name="Best Products of Fruits"/>
<News picture={News2} name="Group of summer fruits"/>
</div>
</div>



              <Footer/>
              </div>


    </>
  );
}

export default App;
