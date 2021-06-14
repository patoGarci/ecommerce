import React, {useState}from 'react';
import  './itemCount.css'
export default function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)
    let decrement = () => {
        if (count > 1){
            setCount(count -1);
        }
    }
    let increase = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    }
    return (
        <>
            <div className="button-cant">
                <button type="button" className="btn btn-outline-warning" onClick={decrement}>-</button>
                <input className="cant" disabled value={count}/>
                <button type="button" className="btn btn-outline-info" onClick={increase}>+</button>
            </div>
            <button type="button" className="btn btn-outline-success" onClick={e => onAdd(e,count)}>Agregar al Carrito</button>
        </>
    )
}