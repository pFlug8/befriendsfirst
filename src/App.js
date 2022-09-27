import './App.css';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DarkMode } from './components/DarkMode'
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
    <DarkMode >
     <TopBar isLoggedIn={isLoggedIn} />
      <Box sx={{
        bgcolor: 'primary.main',
      }}>
        <Routes>
          <Route path='/' element ={<Landing />} />
          <Route path='/dashboard/:id' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />}>
            <Route path='/register/1' element={<RegStepOne />} />
            <Route path='/register/2/:id' element={<RegStepTwo />} />
            <Route path='/register/3' element={<RegStepThree />} />
          </Route> 
        </Routes>
      </Box>
    </DarkMode>
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