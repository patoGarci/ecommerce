import React from 'react'

export default function ItemDetail({props}) {
    console.log(props)
    
    return (
        <div>
            {/*
            <ul className="card" style={{"width": "40%", "listStyle": "none"}}>
                <li><img class="card-img-top" src={props.pictureUrl}/></li>
                <li>id: {props.id}</li>
                <li>title: {props.title}</li>
                <li>description: {props.description}</li>
                <li>price: {props.price}</li>
                <li><ItemCount stock={5} initial={1} onAdd={onAdd}/></li>
            </ul> */}
            {/* <button>Ver mas</button> */}
        </div>
    )
}
