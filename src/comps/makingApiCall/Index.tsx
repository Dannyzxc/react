// learnin useeffects

import { useState, useEffect } from "react";

export default function ApiCall() {
  const [calling, setCalling] = useState({});
  console.log("hello world");

  // fetch("https://swapi.dev/api/people/1")
  // .then(res=> res.json())
  // .then(data=> setCalling(data))

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setCalling(data));
  },[]);

  const returnData = (
    <div>
      <pre>{JSON.stringify(calling, null, 2)}</pre>
    </div>
  );

  return returnData;
}

    