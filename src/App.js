import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Cart from './components/cart'
import { CartProvider}  from './components/context/CartContext'
function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer name="lista de productos"/>
        </Route>
        <Route exact path='/category/:category'><ItemListContainer /></Route>
        <Route exact path='/item/:id'><ItemDetailContainer /></Route>
        {/* <Route exact path='/cart'><Cart /></Route> */}
      </Switch>
      </div>
    </BrowserRouter>
    </CartProvider>
    // <div className="App">
    //   <NavBar/>
    //   <ItemListContainer name="lista de productos"/>
    //   <ItemDetailContainer/>
    // </div>
  );
}

export default App;
