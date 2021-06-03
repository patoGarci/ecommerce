import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
export default function ItemListContainer() {
    const onAdd = (e,count)=>{
        alert(`agregaste ${count} al carrito`);
        count = 1;
    }
    return (
        <>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}
