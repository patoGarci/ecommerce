import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
// import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import {Link} from 'react-router-dom'

export default function Item(props) {
    const onAdd = (e,count)=>{
        alert(`agregaste ${count} al carrito`);
        count = 1;
    }
    return (
        <>
            <ul className="card" style={{"width": "40%", "listStyle": "none"}}>
                <li>
                    <Link to={`/item/${props.id}`}>
                        <img class="card-img-top" src={props.pictureUrl}/>
                    </Link>
                </li>
                <li>id: {props.id}</li>
                <li>title: {props.title}</li>
                <li>description: {props.description}</li>
                <li>price: {props.price}</li>
                <li><ItemCount stock={5} initial={1} onAdd={onAdd}/></li>
            </ul>
        </>
    )
}
