import { useState, useEffect } from "react";

export default function Test() {
  const [calling, setCalling] = useState({});
  const [count , setCount] = useState(1);
  
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setCalling(data));
  },[count]);

  const returnData = (
    <div>
        <h2>the count is {count}</h2>
        <button onClick={() => setCount(prev => prev +1)}>add</button>

        <br />
      <pre>{JSON.stringify(calling, null, 2)}</pre>
    </div>
  );

  return returnData;
}

