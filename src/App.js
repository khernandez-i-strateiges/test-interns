import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Welcome interns!
          <br/>
          <small>
          show your potential, you are one step away from the big leagues
          <br/>
          Good luck.
          </small>
      </h3>

        <a
          className="App-link"
          href="https://i-strategies.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About us
        </a>
      </header>
    </div>
  );
}

export default App;
