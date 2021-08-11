import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Item(props) {
  console.log(props)
  const { id, title, price, imageId, category, dataId } = props;
  const { addItem } = useContext(CartContext);

  const onAdd = (e, quantity) => {
    addItem({ id, title, imageId, price, category, quantity, dataId });
  };
  return (
    <>
      <ul className="card" data-id={dataId} style={{ width: '40%', listStyle: 'none' }}>
        <li>
          <Link to={`/item/${id}`}>
            <img alt="" className="card-img-top" src={imageId} />
          </Link>
        </li>
        <li>Id: {id}</li>
        <li>Title: {title}</li>
        <li>Description: {props.description}</li>
        <li>Price: {price}</li>
        {/* <li>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </li> */}
      </ul>
    </>
  );
}
