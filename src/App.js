import React from 'react';
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import { UserProvider } from './context/UserProvider';

import Home from './components/Home';
import Search from './components/Search';
import Register from './components/Register';
import Login from './components/Login';
import HomeContent from './components/HomeContent';
import BarberList from './components/BarberList';


function App() {
  return (
    <UserProvider>
            <BrowserRouter>
                <Routes>
                  <Route  path="/" element={ <Home /> }>
                    <Route index element={<HomeContent />} />  
                    <Route path="Register" element={ <Register />}   />
                    <Route path="Login" element={ <Login />}   />
                    <Route path="BarberList" element={ <BarberList />}>
                    </Route>
                    <Route path="search/:filter" element={<Search />} />
                  </Route> 
                    
                </Routes>
            </BrowserRouter>
    </UserProvider>
  );
}

export default App;
