import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';   
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App"> 
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
