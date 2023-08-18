import React, { useState } from 'react'
import SubCount from "./SubCount";

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
                <SubCount number={result}/>
            </div>
            <button className='counter--minus' onClick={addResult}> + </button>
        </div>
    )
    
}