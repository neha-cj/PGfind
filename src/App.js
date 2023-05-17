import logo from './logo.svg';
import './App.css';
import Hero from './pages/home/Hero'
import login from './pages/login/login'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';


function App() {
  return(
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/" element={<login.jsx />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App;
