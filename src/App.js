import logo from './logo.svg';
import './App.css';

/* ***** TODO ***** */
/* 
- get User data, get Matches
  - proccess and pass into child components

- figure out conditional DB config

- set up MaterialUI

- profile display action

- db connection and commands... how to?

NOTES:

db = process.env == 'prod' ? prodDB : devDB;

fork, git clone, make changes, git add, git commit, git push, pull request
- all of these have flags that modify behavior


*/ 


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
