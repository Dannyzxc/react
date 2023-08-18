import { useState } from "react";

export default function flip(){

    const [first, setFirst] = useState(true)

    function changeState() {
        setFirst(preState => !preState )
    }
    return (
        <div className="state">
            <h1 className="state--title">do i feel like going out tonigt</h1>
            <div className="state--value" onClick={changeState}>
                <h1 >{first ? "yes":"no"}</h1>
            </div>

        </div>

    )
}