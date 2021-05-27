import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Cart from './components/cart/Cart'
import Buy from './components/buy/Buy'
import {CartFunction} from './context/CartContext'


function App() {
  return (
    <CartFunction>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar/>
          </header>
          <Switch>
            <Route exact path='/'>
                <div className='App-main'>
                  <ItemListContainer />
                </div>
            </Route>
            <Route exact path='/category/:categoryName'>
              <div className='App-main'>
                  <ItemListContainer />
              </div>
            </Route>
            <Route exact path='/product/detail/:id'>
              <ItemDetailContainer />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/buy'>
              <Buy />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartFunction>
    
  );
}

export default App;
