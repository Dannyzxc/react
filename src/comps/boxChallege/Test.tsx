import React, { useState } from "react";
import boxes from "./Data";
import Box from "./Box";

export default function Test(props) {
  const [squares, setsquares] = useState(boxes);

  const eventHandler = (id:number) => {
    setsquares(prev => {
      return prev.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }

  const sqElement = squares.map((square) => (
    <Box key={square.id} on={square.on}  eventHandler={()=>eventHandler(square.id)}></Box>
  ));

  return (
    <main>
      <h1>Boxes will go here</h1>
      {sqElement}
    </main>
  );
}
