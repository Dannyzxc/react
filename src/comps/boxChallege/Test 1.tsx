import React, { useState } from "react";
import boxes from "./Data";
import "./styles.css";


export default function Test(props) {
  const [squares, setsquares] = useState(boxes);

  const style = { backgroundColor: props.darkMode ? "white" : "black" };

  const sqElement = squares.map((square) => (
    <div style={style} className="box" key={square.id}>{square.id}</div>
  ));

  return (
    <main>
      <h1>Boxes will go here</h1>
      {sqElement}
    </main>
  );
}
