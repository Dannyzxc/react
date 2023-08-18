import { useState } from "react";
// import Header from "./comps/Header";
// import Hero from "./comps/hero";
// import Count from "./comps/Count";
// import CountNum from "./comps/CountNum/CountNum";
// import Flip from "./comps/flip";
// import AddItems from "./comps/AddItems";
// import Test from "./comps/boxChallege/Test";
// import test from "./comps/test";
// import Test from "./comps/display/test";
// import Joke from "./comps/joke/Joke";
// import Form from "./comps/form/Form";
// import FormSubmit from "./comps/signupForm/FormSumit";
// import ApiCall from "./comps/makingApiCall/Index";
// import Test from "./comps/makingApiCall/Test";
import Window from "./comps/window/Window";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  const handleEvent = () => {
    setShow(prev => !prev)
  };

  return (
    <>
      <div className="container">
        <button onClick={handleEvent}>Toggle WindowTracker</button>
      </div>
      {show && <Window />}
    </>
  );
}

export default App;
