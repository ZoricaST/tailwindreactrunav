import React from 'react'

const Button = (props) => {
    return (
        <button className='bg-red-500 text-white font-[Poppins] py-2 px-6 rounded 
        md:ml-8 hover:bg-orange-400 
    duration-800'>
      {props.children}
    </button>
    )
}

export default Button