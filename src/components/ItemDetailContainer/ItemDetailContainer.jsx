/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore} from '../../firebase/'

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  console.log(item)
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const itemById = itemCollection.doc(id);
    itemById.get().then((querySnapshot) => {
      if(Object.keys(querySnapshot).length === 0){
          console.log("No results!");
      };
      setItem(querySnapshot.data());
    }).catch((error) => {
        console.log("Error searching items", error);
    });
  }, [id]);
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
}
