import { useState } from "react";

export default function flip() {
  const [thingArray, setThingArray] = useState(["thing 1", "thing 2"]);

  // const thingsArrray = ['thing 1','thing 2']

  function addItems() {
    setThingArray((preThingArray) => {
      return [...preThingArray, `thing ${preThingArray.length + 1}`];
    });
  }

  const thingsElement = thingArray.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <div className="state">
      <button onClick={addItems}>add items</button>

      {thingsElement}
    </div>
  );
}
