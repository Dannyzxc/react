import data from "./data";
import React from 'react'

export default function test() {
  function handleEvents() {
    // let items = data.data.memes.map(item => item);
    const x = data.data.memes

    const randomNumber = Math.floor(Math.random() * x.length)
    const url = x[randomNumber].url
    console.log(url);
    
    
  }

  return (
    <>
      <div className="">
        <button>add item</button>
        
      </div>
    </>
  );
}

