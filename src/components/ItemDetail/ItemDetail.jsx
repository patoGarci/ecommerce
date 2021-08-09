import { React, useContext,useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
export default function ItemDetail({ item }) {
  const [buyQuantity, setbuyQuantity] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = (e, quantity) => {
    addItem({ ...item, quantity });
    setbuyQuantity(quantity);
  };
  return (
    <div className="card-item-detail">
      <img alt="" className="card-img-top" src={item.imageId} />
      <ul className="card" style={{ width: '40%', listStyle: 'none' }}>
        <li>id: {item.id}</li>
        <li>title: {item.title}</li>
        <li>description: {item.description}</li>
        <li>price: {item.price}</li>
        <li>color: {item.color}</li>
        <li>nota: {item.nota}</li>
        <li>
          {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
          {buyQuantity===0 ?
                        (<ItemCount stock={5} initial={1} onAdd={onAdd} />) :
                        (<Link to="/cart"><button className="btn btn-primary">Terminar Compra</button></Link>)
                    }
        </li>
      </ul>
    </div>
  );
}
