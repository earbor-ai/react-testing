
import './App.css';
import Login from './Login';
import Home from './Home';
import {BrowserRouter, Routes, Route} from  'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
