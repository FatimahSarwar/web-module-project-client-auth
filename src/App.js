import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

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
       <input placeholder='username' />
       <input placeholder='password' />
    </div>
  );
}

export default App;
