import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer name="lista de productos"/>
        </Route>
        <Route exact path='/category/:category'><ItemListContainer /></Route>
        <Route exact path='/iems/:id'><ItemDetailContainer /></Route>
      </Switch>
      </div>
    </BrowserRouter>
    // <div className="App">
    //   <NavBar/>
    //   <ItemListContainer name="lista de productos"/>
    //   <ItemDetailContainer/>
    // </div>
  );
}

export default App;
