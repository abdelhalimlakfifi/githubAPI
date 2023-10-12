import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Header'
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />


            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            
        </>
    )
}

export default App
