import './App.css';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import TopBar from './components/TopBar';
import Landing from './components/Landing';

import { Register } from './pages/Register'; // < ------------- test delete
import { RegStepOne } from './components/RegStepOne';
import { RegStepTwo } from './components/RegStepTwo';
import { RegStepThree } from './components/RegStepThree';

const isLoggedIn = false;

const App = () => {
  
  return (
    <div>
      <TopBar isLoggedIn={isLoggedIn} />
      <Box sx={{
        
      }}>
        <Routes>
          <Route path='/' element ={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />}>
            <Route path='/register/one' element={<RegStepOne />} />
            <Route path='/register/two' element={<RegStepTwo />} />
            <Route path='/register/three' element={<RegStepThree />} />
          </Route> 
        </Routes>
      </Box>
    </div>
    );
  }
  
  export default App;
  
  /* ***** TODO ***** */
  /* 
  - get User data, get Matches
    - proccess and pass into child components
  
  - figure out conditional DB config
  
  - profile display action
  
  NOTES:
  
  db = process.env == 'prod' ? prodDB : devDB;
  
  fork, git clone, make changes, git add, git commit, git push, pull request
  - all of these have flags that modify behavior
  
  */ 