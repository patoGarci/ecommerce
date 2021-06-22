import  {React, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

export default function ItemDetail({item}) {
    // console.log(item.title);
    const [buyQuantity, setbuyQuantity] = useState(0);

    const onAdd = (count) => {
        setbuyQuantity(count);
    }
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
                <li>
                {buyQuantity===0 ?
                        (<ItemCount stock={5} initial={1} onAdd={onAdd} />) :
                        (<Link to='/'><button className="btn btn-primary">Terminar Compra</button></Link>)
                    }
                </li>
            </ul>
        </div>
    )
}
