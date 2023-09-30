import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './compoment/Home';
import Layout from './compoment/Layout';
import Login from './compoment/Login';
import Register from './compoment/Register';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
    </Route>
  </Routes>
  </BrowserRouter>
    </div>
    </>
  );
}

export default App;
