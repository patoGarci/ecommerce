import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item'
import ItemList from '../ItemList/ItemList'
export default function ItemListContainer(props) {
    const onAdd = (e,count)=>{
        alert(`agregaste ${count} al carrito`);
        count = 1;
    }
    return (
        <>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <ItemList items = {props.items}/>
        </>
    )
}
