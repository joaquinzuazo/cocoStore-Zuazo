import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemContainer from './components/itemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className='App-main'>
        <ItemContainer />
      </div>
    </div>
  );
}

export default App;
