import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Dologin  from './components/login';
import useToken from './hooks/useToken'


function App() {
  const {token, setToken} = useToken();

  if(!token) {
    return <Dologin setToken={setToken} />
  }

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
