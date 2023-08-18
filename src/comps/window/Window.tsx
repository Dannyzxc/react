import { useState,useEffect } from "react";

export default function Window() {

    const [windowWindth, setWindowWindth] = useState(window.innerWidth)

    useEffect(() => {
      window.addEventListener("resize",function(){
        setWindowWindth(window.innerWidth)
        
      })
    
     
    }, [])
    

    const returning = (
        <h1>window width : {windowWindth}</h1>
    )

    return returning
    
}