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
      <div className="card-li-itemCount">
        <ul className="card" style={{ listStyle: 'none' }}>
          {/* <li>id: {item.id}</li> */}
          <li>Title: {item.title}</li>
          <li>Description: {item.description}</li>
          <li>Price: {item.price}</li>
          <li>Colour: {item.color}</li>
          <li>Note: {item.nota}</li>
          {/* <li> */}
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
            {/* {buyQuantity===0 ?
                          (<ItemCount stock={5} initial={1} onAdd={onAdd} />) :
                          (<Link to="/cart"><button className="btn btn-primary">Terminar Compra</button></Link>)
                      }
          </li> */}
        </ul>
        <div className="itemCount">  {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}
          {buyQuantity===0 ?
          (<ItemCount stock={5} initial={1} onAdd={onAdd} />) :
          (<Link to="/cart"><button className="btn btn-primary">Terminar Compra</button></Link>)
        }</div>
      </div>
    </div>
  );
}
