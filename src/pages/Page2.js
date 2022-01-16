import React from 'react';
import Nav1 from '../components/Nav1';

const Page2 = () => {
   let tabovi=[
    {
        id:0,
        put:'/',
        ime:'Pocetna',
        },    
    {
        id:1,
        put:'page1',
        ime:'Page1',
        },
        {
        id:4,
        put:'page4',
        ime:'Page4',
        }
        ]
    return (
        <div className=' p-20 '> 
            
            <Nav1 tabovi={tabovi}/> 
            <h1>Ovo jePage2</h1> 
            <p>Ovde navigacija ima tabove page1 i page4</p>     
        </div>
    )
}

export default Page2