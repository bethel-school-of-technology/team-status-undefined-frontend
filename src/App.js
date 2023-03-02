import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserProvider';

import Home from './components/Home';
import Search from './components/Search';
import EditAccount from './components/EditAccount';
import Login from './components/Login';
import HomeContent from './components/HomeContent';
import BarberList from './components/BarberList';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import SignUp from './components/SignUp';


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeContent />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="EditAccount" element={<EditAccount />} />
            <Route path="Login" element={<Login />} />
            <Route path="BarberList" element={<BarberList />} />
            <Route path="Profile/:barberId" element={<Profile />} />
            <Route path="EditProfile" element={<EditProfile />} />
            <Route path="search/:filter" element={<Search />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
