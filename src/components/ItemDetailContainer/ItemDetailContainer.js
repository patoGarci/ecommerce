import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const [item, setItem] =useState([])
    const data =
        [{
            id: '1',
            title: 'iphone',
            description: 'usado',
            price: '$5000000',

            pictureUrl:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },];
    useEffect(()=>{
        const getItem = () =>{
            return new Promise((resolve,reject)=>{
                resolve(data);
            });
        };
        getItem().then(res=>{
            setItem(res);
        });
    }, []);
// console.log(item)
    return (
        <div>
            <ItemDetail item = {item}/>
        </div>
    )
}