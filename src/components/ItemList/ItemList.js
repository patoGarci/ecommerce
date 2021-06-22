import React from 'react'
import Item from '../Item/Item'
import './ItemList.css';
export default function ItemList(props) {
    return (
        <div className="card-item">
            {props.items.map( (x,index) =>(
                <Item
                key = {index}
                id = {x.id}
                title = {x.title}
                price ={x.price}
                description ={x.description}
                pictureUrl = {x.pictureUrl}
                />
            ))}
        </div>
    )
}
