// conditional rendering

import { useState } from "react";
interface props{
    setup:string,
    punchline:string
}


export default function Joke({setup,punchline}:props) {
    const [isShown, setisShown] = useState(false)
   

    function toggleShown() {  
        setisShown(prevShown => !prevShown)
        
    }



    return (
        <div>
          {setup && <h3>{setup}</h3>}
          {isShown && <p>{punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "hide" :"show"} punchline</button>
        </div>
    )
}
