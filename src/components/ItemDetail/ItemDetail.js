import React from 'react'
import './ItemDetail.css'
export default function ItemDetail({item}) {
    console.log(item.title);
    
    return (
        <div className="card-item-detail">
            <img class="card-img-top" src={item.pictureUrl}/>
            <ul className="card" style={{"width": "40%", "listStyle": "none"}}>
                {/* <li><img class="card-img-top" src={item.pictureUrl}/></li> */}
                <li>id: {item.id}</li>
                <li>title: {item.title}</li>
                <li>description: {item.description}</li>
                <li>price: {item.price}</li>
                <li>color: {item.color}</li>
                <li>nota: {item.nota}</li>
            </ul>
        </div>
    )
}
