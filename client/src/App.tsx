
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Register from './components/login/Register';

function App() {

  return (
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </div>
  );
}

export default App;
