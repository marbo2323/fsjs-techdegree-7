import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { apiKey, apiSecret } from "../config";
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from './components/PhotoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Search />
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate replace to="cats" />} />
          <Route path="cats" element={<PhotoList />} />
          <Route path="dogs" element={<PhotoList />} />
          <Route path="computers" element={<PhotoList/> } />
        </Routes>
      </div>
    </>
  )
}

export default App
