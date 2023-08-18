import React, { useState } from 'react'

export default function Count() {

    let [result , setResult] = useState(0)
    function addResult() {

        // setResult(result + 1)
            // or
        setResult(prevCount => prevCount + 1 )
        
        
    }
    function removeResult() {
        // setResult(result - 1)
        setResult(prevCount => prevCount - 1 )

        
    }

    return (
        <div className='counter'>
            <button className='counter--plus' onClick={removeResult}> - </button>
            <div className='counter--count'>
                <h1>{result}</h1>
            </div>
            <button className='counter--minus' onClick={addResult}> + </button>
        </div>
    )
    
}