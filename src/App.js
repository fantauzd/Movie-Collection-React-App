import './App.css';

function App() {
  const name = 'Fantauzzo';
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {name}!
        </p>
        <p>
          Did you know it is {Date()}
        </p>
      </header>
    </div>
  );
}

export default App;
