import './App.css';
import Greeting from './Greeting.js';

function App() {
  const name = 'Fantauzzo';
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name={name} time={Date()}/>
      </header>
    </div>
  );
}

export default App;
