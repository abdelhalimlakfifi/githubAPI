import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>


            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            
        </>
    )
}

export default App
