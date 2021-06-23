import { useState } from "react";

export function Button() {

    const [counter, setCouter] = useState(0);

    function increment (){
        setCouter(counter + 1);

    }



    return (
        <button onClick={increment}>{counter}</button>
    );
}
