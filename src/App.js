import logo from './logo.svg';
import './App.css';

import Movie from './components/Movie'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Movie title="Netflix Original" />
      </header>
    </div>
  );
}

export default App;
