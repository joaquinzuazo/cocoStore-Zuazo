import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'


function App() {
  return (
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
          <Route exact path='/category/:id'>
            <ItemDetailContainer />
          </Route>
          <Route exact path='/product/detail/:id'>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
