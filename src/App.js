import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import { useState } from 'react';
import Home from './Components/Home';
import Project from './Components/Project';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';


function App() {
  const [mode, setMode] = useState('light');

  const tooglemode = () => {
    if (mode === 'light') {
      setMode('dark')

      document.body.style.background = "black"
    } else {
      setMode('light')
      document.body.style.background = "white"
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} tooglemode={tooglemode} />
        <Routes>
          <Route path='/' element={<Home mode={mode} tooglemode={tooglemode} />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/project' element={<Project mode={mode} tooglemode={tooglemode} />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/skills' element={<Skills mode={mode} tooglemode={tooglemode} />}></Route>
          <Route path='/certificates' element={<Certificates mode={mode} tooglemode={tooglemode} />}></Route>
        </Routes>
        <Footer mode={mode} tooglemode={tooglemode} />
      </BrowserRouter>

    </>
  );
}

export default App;