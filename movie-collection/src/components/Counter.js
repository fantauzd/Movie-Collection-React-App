import React, {useState} from 'react';
import { MdAdd } from "react-icons/md";

function Counter(){
    let [getCounter, setCounter] = useState(0);
    const incCounter = () => {
        setCounter(getCounter+1); }
    return(
        <>
            <p>Quantity: {getCounter} <MdAdd onClick={incCounter} /> </p>
        </>
    );
}

export default Counter;