import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
function App() {
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
    <div className="App">
      <NavBar/>
      <ItemListContainer name="lista de productos" items = {items}/>
    </div>
  );
}

export default App;
