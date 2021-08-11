import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore} from '../../firebase'

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  useEffect(() => {
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

  }, [category]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}
