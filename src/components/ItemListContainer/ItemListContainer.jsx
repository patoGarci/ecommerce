import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore} from '../../firebase'

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    // new Promise((resolve, reject) => {
      //     // {
      //     //   id: '0',
      //     //   title: 'iphone',
      //     //   description: 'usado',
      //     //   price: 5000000,
      //     //   pictureUrl:
      //     //     'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      //     //   category: 'celphones',
      //     // },
      //     // {
      //     //   id: '1',
      //     //   title: 'huawei',
      //     //   description: 'nuevo',
      //     //   price: 3000000,
      //     //   pictureUrl:
      //     //     'https://images.unsplash.com/photo-1546706887-a24528987a75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGh1YXdlaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      //     //   category: 'celphones',
      //     // },
      //     // {
      //     //   id: '2',
      //     //   title: 'tv samsung',
      //     //   description: 'nuevo',
      //     //   price: 7000000,
      //     //   pictureUrl:
      //     //     'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHR2fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      //     //   category: 'tv',
      //     // },
      //     // {
      //     //   id: '3',
      //     //   title: 'tv',
      //     //   description: 'nuevo',
      //     //   price: 1800000,
      //     //   pictureUrl:
      //     //     'https://images.unsplash.com/photo-1596320378136-c6a182f7d0b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHR2fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      //     //   category: 'tv',
      //     // },
      //   ]);
      // }, 2000);
    // }).then((res) =>
    //   // console.log(category)}
    //   category === 'all' || category === undefined
    //     ? setItems(res)
    //     : setItems(res.filter((item) => item.category === category))
    // );
    const db = getFirestore();
    let itemCollection;
    if ( category === 'all' || category === undefined) {
        itemCollection = db.collection("items");
    }else{
        itemCollection = db.collection("items").where("categoryId", "==", `${category}`);
    };

    const itemCollectionQuery = itemCollection.get()
    
    itemCollectionQuery.then((querySnapshot) => {
        let documento = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
        setItems(documento);
    })
    .catch((e) => {console.log(e)})
  //   console.log("list")
  // console.log(items)
  }, [category]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}
