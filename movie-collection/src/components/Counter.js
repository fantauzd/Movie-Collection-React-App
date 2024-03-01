import React, {useState} from 'react';
import { MdAdd, MdCancel } from "react-icons/md";

function Counter(){
    let [getCounter, setCounter] = useState(0);
    const incCounter = () => {
        setCounter(getCounter+1); }
    const resetCounter = () => {
        setCounter(0); }
    return(
        <>
            <p> <MdCancel onClick={resetCounter} /> Quantity: {getCounter} <MdAdd onClick={incCounter} /> </p>
        </>
    );
}

export default Counter;