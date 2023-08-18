import React from 'react'

export default function SubCount(props) {
    console.log('count the component');
    return (
        <div className='counter--count'>
            <h1>{props.number}</h1>
        </div>
    )
    
}
