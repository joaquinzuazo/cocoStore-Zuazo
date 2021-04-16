import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemList from './components/itemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className='App-main'>
        <ItemList class='main-item' message='Sitio en construcción'/>
      </div>
    </div>
  );
}

export default App;
