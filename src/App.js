import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dologin  from './components/login';
import DoRegistration  from './components/registration';
import { useState } from 'react';

function App() {

  const [token, setToken] = useState();
  return (
    <div className="App">
      <h1>Hedaer</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={!token && <Dologin />}>
          </Route>
          <Route path="/registration" element={<DoRegistration />}>
          </Route>       
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
