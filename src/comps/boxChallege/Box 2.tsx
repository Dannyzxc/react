import { useState } from "react";
import "./styles.css";
export default function Box(props) {

    const [on, setOn] = useState(props.on)

    const styles = {
        backgroundColor: on ? 'white' : "black"
    }

    const eventHandler = () =>{
        setOn(prev  => !prev)
        
    }
    
    return (
        <div style={styles} className="box" onClick={eventHandler}></div>
    )
}