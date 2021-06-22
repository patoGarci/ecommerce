import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] =useState([])
    const data =[
    {
        id: '0',
        title: 'iphone',
        description: 'usado',
        price: '$5000000',
        pictureUrl:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category : "celphones",
        color: "azul",
        nota : "El chip A14 Bionic, el más rápido en un smartphone. Una pantalla OLED de borde a borde. Un nuevo frente de Ceramic Shield, cuatro veces más resistente a las caídas. Además, ahora el modo Noche viene en todas las cámaras. El iPhone 12 lo tiene todo. Y está disponible en dos tamaños perfectos."
      },
      {
        id: '1',
        title: 'huawei',
        description: 'nuevo',
        price: '$3000000',
        pictureUrl:'https://images.unsplash.com/photo-1546706887-a24528987a75?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGh1YXdlaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category : "celphones"
      },
      {
        id: '2',
        title: 'tv samsung',
        description: 'nuevo',
        price: '$7000000',
        pictureUrl:'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHR2fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        category : "tv"
      },
      {
        id: '3',
        title: 'tv',
        description: 'nuevo',
        price: '$1800000',
        pictureUrl:'https://images.unsplash.com/photo-1596320378136-c6a182f7d0b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHR2fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category : "tv"
      },];
    useEffect(()=>{
        console.log(id)
        const getItem = () =>{
            return new Promise((resolve,reject)=>{
                resolve(data);
            });
        };
        getItem().then(res=>{
            setItem(res.filter(item => item.id === id)[0])
        });
    }, [id]);
    return (
        <div>
            <ItemDetail item = {item}/>
        </div>
    )
}