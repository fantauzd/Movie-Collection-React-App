import './App.css';
import Greeting from './components/Greeting';
import movies from './data/movies';
import MovieCollection from './components/MovieCollection';

function App() {
  const name = 'Nauman';
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name={name} time={Date()} />
        <MovieCollection movies={movies} />
      </header>
    </div>
  );
}

export default App;
