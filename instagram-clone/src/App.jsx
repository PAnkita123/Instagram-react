import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer.jsx'
import {Route, Routes} from 'react-router-dom'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'

function App() {
  return (
    
    
      <Routes>
      <Route path='/Footer' element={<Footer/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      {/* <Route path='/HomePage' element={<HomePage/>}/> */}

      </Routes>
  
  );
}

export default App;
