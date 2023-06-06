import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import Articles from './components/Articles';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/*' element={<NotFound/>}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/articles' element={<Articles />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
