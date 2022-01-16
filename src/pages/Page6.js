import React from 'react';
import Nav from '../components/Nav';

const Page6 = () => {
   let tabovi= [
       
    {
        id:0,
        put:'/',
        ime:'Pocetna',
        },{
        id:2,
        put:'page2',
        ime:'Page2',
        },
        {
        id:3,
        put:'page3',
        ime:'Page3',
        }
        ]
    return (
        <div className=' p-20 '> 
            <Nav tabovi={tabovi}/>
            <h1>Ovo jePage6</h1> 
            <p>Ovde navigacija ima tabove:page2 i page3</p>
                  
        </div>
    )
}

export default Page6