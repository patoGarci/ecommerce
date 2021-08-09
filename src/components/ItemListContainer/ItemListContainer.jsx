import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore} from '../../firebase'

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId)
  useEffect(() => {
    const db = getFirestore();
    let itemCollection;
    if ( categoryId === 'all' || categoryId === undefined) {
        itemCollection = db.collection("items");
    }else{
      // if (categoryId){
        itemCollection = db.collection("items").where("categoryId", "==", `${categoryId}`);
      // }
    };

    const itemCollectionQuery = itemCollection.get()
    itemCollectionQuery.then((querySnapshot) => {
        let documento = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
        setItems(documento);
    })
    .catch((e) => {console.log(e)})
  }, [categoryId]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}
