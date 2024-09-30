import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';


function App() {




  return (
    <>
    <main>
      <article>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </article>
    </main>
    </>
  )
}

export default App
