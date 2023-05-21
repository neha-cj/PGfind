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
          <Route path="/login" element={<login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App;
