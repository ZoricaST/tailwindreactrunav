import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';


const Nav = ({tabovi}) => {
    let [open,setOpen]=useState(false);
    return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-lime-100 py-2 md:px-10 px-7'>
             
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-red-900'>

                    <span className='text-3xl text-orange-600 mr-1 pt-2'>
                    <ion-icon name="basketball-outline"></ion-icon>
                    </span>
                
                    Zorica
                </div>

            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
        
  <li className='md:ml-8 text-xl md:my-0 my-7'>
      <Link className='text-gray-600 hover:text-gray-400 duration-500' to="/"  >Home</Link></li>
  
  {tabovi.map((tab) => (<li className='md:ml-8 text-xl md:my-0 my-7'>
      <Link to={`/${tab.put}`} className='text-gray-600 hover:text-gray-400 duration-500' key={tab.id}>{tab.ime}</Link></li>))} 
      <Button>
          O meni
        </Button>
        </ul>
      </div>
</div>
    )
}

export default Nav