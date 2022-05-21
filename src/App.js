import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const recentUser = sessionStorage.getItem('loggedInUser')
  const parseUser = JSON.parse(recentUser)
  const [loggedInUser, setLoggedInUser] = useState(parseUser || { isSignedIn: false });
  // console.log('fgfg')
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
