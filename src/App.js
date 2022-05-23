import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import  SocketIO  from 'socket.io-client';
export const UserContext = createContext();

const ENDPOINT ='http://localhost:4500/';
const socket=SocketIO(ENDPOINT,{transports:['websocket']} );

function App() {
  const recentUser = sessionStorage.getItem('loggedInUser')
  const parseUser = JSON.parse(recentUser)
  const [loggedInUser, setLoggedInUser] = useState(parseUser || { isSignedIn: false });
  
  socket.on('connect',()=>{
  
  }) 
  
return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<RequireAuth><Home/></RequireAuth>} />
          <Route path="/home" element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
