import './App.css';
import Register from './components/Register';



function App() {
  
  return (
    <Register></Register>
    );
  }
  
  export default App;
  
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
  
  - i made some changes to test pulling a remote repo
  
  */ 