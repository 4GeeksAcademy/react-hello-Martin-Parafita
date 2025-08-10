import React, { useState } from 'react'

const Contador = () => {
    const [counter,setCounter] = useState (0);
    const increaseButton = () => {
        setCounter(counter + 1);
    }
    const decreaseButton = () => {
        setCounter(counter - 1);
    }
    return (
        <div>
            <p className='fs-4'>La cuenta va por: {counter}</p>
            <button onClick={increaseButton} className='btn btn-success'>Sumar</button>
            <button onClick={decreaseButton} className='btn btn-danger'>Restar</button>
        </div>
    );
};
export default Contador;