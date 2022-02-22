import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/login';
function App() {
  return (
    <div>
      <h1>FRIENDS DATABASE</h1>
      <nav>
        <button>LOGIN</button>
        <button>FRIENDLIST</button>
        <button>ADD FRIEND</button>
        <button>Logout</button>
       </nav>
       <Route path="/" element={<Login/>} />
    </div>
  );
}

export default App;
