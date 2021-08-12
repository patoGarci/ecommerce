import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer name="lista de productos" />
            </Route>
            <Route exact path="/category/:category">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
