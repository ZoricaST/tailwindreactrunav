import React from 'react';
import Nav from '../components/Nav';

const Page4 = () => {
    let tabovi= [
        
        {
            id:0,
            put:'/',
            ime:'Pocetna',
            },{
        id:1,
        put:'page1',
        ime:'Page1',
        },
        {
        id:3,
        put:'page2',
        ime:'Page2',
        },
        {
            id:5,
            put:'page5',
            ime:'Page5',
            }
        ]
    return (
        <div className=' p-20 '> 
            <Nav tabovi={tabovi}/>
            <h1>Ovo jePage4</h1>  
            <p>Ovde navigacija ima tabove: page1, page2 i page5</p>
                 
        </div>
    )
}

export default Page4