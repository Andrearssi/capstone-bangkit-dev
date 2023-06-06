import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import Articles from './components/Articles';
import NotFound from './components/NotFound';
import Prices from './components/Prices';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/*' element={<NotFound/>}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/articles' element={<Articles />}/>
      <Route path='/prices' element={<Prices/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
