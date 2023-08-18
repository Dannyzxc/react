import React, { useState } from "react";
import boxes from "./Data";

import Box from "./Box";

export default function Test(props) {
  const [squares, setsquares] = useState(boxes);

  const eventHandler = (id) => {
    setsquares(prev => {
      const newSqr = []
      for (let i = 0; i < prev.length; i++) {
        const currentSq = prev[i]
        if (currentSq.id === id) {
          const updatedSq = {
            ...currentSq,
            on: !currentSq.on
          }
          newSqr.push(updatedSq)
        } else {
          newSqr.push(currentSq)
        }
      }

      return newSqr
    })


  }

  const sqElement = squares.map((square) => (
    <Box key={square.id} on={square.on} id={square.id} eventHandler={eventHandler}></Box>
  ));

  return (
    <main>
      <h1>Boxes will go here</h1>
      {sqElement}
    </main>
  );
}


