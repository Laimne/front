import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Main from './es/Main';



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="home" element={<Home/>}></Route>
        <Route path="Suppliers" element={<Main/>}></Route>
        <Route path="Consumers" element={<Main/>}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;