import React, { useContext } from 'react'
import { useState } from 'react';
import UserContext from './UserContext';


const Header = () => {

  const [language, setlanguage] = useState(false);

   const {color ,setcolor}=useContext(UserContext);
  
  return (
    
    <div className=' '>
      

        {/* top nav */} 


        <div className={`${ color ? "bg-black" : "bg-[#576574]"} text-white box `}>

            <div className='w-11/12 m-auto flex p-3'>
              <div className='w-full flex justify-between'>

             
<div className=' text-lg'>
    <a>contact</a>
</div>

<div className=' gap-5 flex  text-lg'>
  <div>
    <a href='#box'>Login / Resister</a>
    </div>
    <div onMouseEnter={()=>setlanguage(true)} onMouseLeave={()=>setlanguage(false)} className=' relative text-lg'>
    <i className="m-1 fa-solid fa-globe"></i>
    <a>English</a>
    <i className="m-1 fa-solid fa-caret-down"></i>
    <div className={`absolute ${language ? "block": "hidden"} left-2 bg-white text-black z-10 text-base shadow-2xl w-[100px] p-1`}>
      <ul className=''>
        <li>English</li>
        <hr/>
        <li>Marathi</li>
      </ul>
    </div>
    </div>
   
    <div onClick={()=>{
     setcolor(!color);

     
      
      
    }} className='text-lg'> <i className= {`${color ? "fa-solid fa-sun":"fa-solid fa-moon"}`}></i></div>
   
</div>
                
</div>
            </div>

        </div>


        {/* main nav */}
        <hr/>

        <div className={`mt-3 shadow-xl  ${color ? "bg-black" : "bg-[#2f3640]"} text-white p-3`}>
          <div className='w-11/12 m-auto flex justify-between'>
            <div className='flex gap-6 justify-center'>
              <img className='w-[200px]' src='https://warkarinews24.in/uploads/logo/logo_65ab533a0c3227-38422152.jpg' alt=''/>
              <a className='mt-2'>HOME</a>
              <a className='mt-2 text-orange-500 font-semibold'>NEWS</a>
              <a className='mt-2'>GALLERY</a>
            </div>

            <div className='text-lg '>
            <i className="mt-3 fa-solid fa-magnifying-glass"></i>
            <input className={`w-[300px] ${ color? "bg-black": "bg-slate-200"} ml-2 rounded-sm`} type="text" name="" id="" placeholder='Search For News...' />
            <marquee className="text-orange-500 font-semibold" >This Is Serach Bar</marquee>
            
            </div>

          </div>
        </div>
        
    </div>
  )
}

export default Header