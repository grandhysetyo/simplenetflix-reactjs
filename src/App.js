import './App.css';

import api from './api.js'

import Movie from './components/Movie'
function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Movie title="Netflix Original" url={api.fetchNetflixOriginals}/>
        <Movie title="Trending Now" url={api.fetchTrending}/>
      </header>
    </div>
  );
}

export default App;
