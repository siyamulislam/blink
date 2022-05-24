import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
export const UserContext = createContext();

function App() {
  const recentUser = sessionStorage.getItem('loggedInUser')
  const parseUser = JSON.parse(recentUser)
  const [loggedInUser, setLoggedInUser] = useState(parseUser || { isSignedIn: false });
  
return (
   <div className='App'>
      <UserContext.Provider  value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<RequireAuth><Home/></RequireAuth>} />
          <Route path="/home" element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
   </div>
  );
}

export default App;
