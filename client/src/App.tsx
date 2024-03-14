
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Register from './components/login/Register';
import Login from './components/login/Login';

function App() {

  return (
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </div>
  );
}

export default App;
