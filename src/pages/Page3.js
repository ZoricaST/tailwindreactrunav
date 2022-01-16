import React from 'react';
import Nav from '../components/Nav';

const Page3 = () => {
    let tabovi= [
     
        {
        id:1,
        put:'page1',
        ime:'Page1',
        },
        {
        id:4,
        put:'page4',
        ime:'Page4',
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
            <p>Ovde navigacija ima tabove: page1, page4 i page5</p>
                 
        </div>
    )
}

export default Page3