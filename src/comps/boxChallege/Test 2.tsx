
import React, { useState } from "react";
import boxes from "./Data";

import Box from "./Box";

export default function Test(props) {
    const [squares, setsquares] = useState(boxes);

    const sqElement = squares.map((square) => (
        <Box key={square.id} on={square.on}></Box>
    ));

    return (
        <main>
            <h1>Boxes will go here</h1>
            {sqElement}
        </main>
    );
}
