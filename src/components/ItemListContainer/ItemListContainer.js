import React from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react';
export default function ItemListContainer() {
    // const onAdd = (e,count)=>{
    //     alert(`agregaste ${count} al carrito`);
    //     count = 1;
    // }
  const [items, setItems] = useState([]);
  useEffect(() => {
    new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve([
          {
            id: '1',
            title: 'iphone',
            description: 'usado',
            price: '$5000000',
            pictureUrl:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          },
          {
            id: '2',
            title: 'huawei',
            description: 'nuevo',
            price: '$3000000',
            pictureUrl:'https://images.unsplash.com/photo-1546706887-a24528987a75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGh1YXdlaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          }
        ]);
      }, 2000);
    })
    .then(res =>
      setItems(res)
    );
  });
    return (
        <>
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
            <ItemList items = {items}/>
        </>
    )
}
