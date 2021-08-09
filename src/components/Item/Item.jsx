import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Item(props) {
  const { id, title, price, pictureUrl, category } = props;
  const { addItem } = useContext(CartContext);

  const onAdd = (e, quantity) => {
    addItem({ id, title, pictureUrl, price, category, quantity });
  };
  return (
    <>
      <ul className="card" style={{ width: '40%', listStyle: 'none' }}>
        <li>
          <Link to={`/item/${id}`}>
            <img alt="" className="card-img-top" src={pictureUrl} />
          </Link>
        </li>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>description: {props.description}</li>
        <li>price: {price}</li>
        <li>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </li>
      </ul>
    </>
  );
}