import React from 'react';
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import { UserProvider } from './context/UserProvider';

import Home from './components/Home';


function App() {
  return (
    <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={ <Home /> }>
                     </Route>      
                </Routes>
            </BrowserRouter>
    </UserProvider>
  );
}

export default App;
