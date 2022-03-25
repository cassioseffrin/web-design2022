import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Item from './Item';

function App() {
  return (
    <div className="App">
      <Item apertou={(texto) => { console.log(texto) }}> Teste </Item>
    </div>
  );
}

export default App;
