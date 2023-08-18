// conditional rendering or ternary
// f7:35:00 display items form array only if they are present
import { useState } from "react";

export default function Test() {
    const [message, setMessage] = useState(["a","b","c"])

    return (
        <div>
          {message.length > 0 ? <h1>you have {message.length} unread {message.length > 1 ? "messages" : "message"}</h1>  : <h1>you're all cought up!</h1>}
            
        </div>
    )
}
