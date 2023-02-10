import React from 'react';
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import { UserProvider } from './context/UserProvider';

import Home from './components/Home';
import Search from './components/Search';
import Register from './components/Register';


function App() {
  return (
    <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={ <Home /> }>
                     <Route path="search/:filter" element={<Search />} />  
                     <Route path="Register" element={ <Register />}   />
                     </Route> 
                    
                </Routes>
            </BrowserRouter>
    </UserProvider>
  );
}

export default App;
