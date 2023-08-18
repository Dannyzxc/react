import { useState } from "react";
import "./styles.css";
export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? 'white' : "black"
    }

    return (
        <div style={styles} className="box" onClick={props.eventHandler}></div>
    )
}

