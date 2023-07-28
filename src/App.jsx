import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  

  return (
    <div>

      
      <div className="container">
      <Navbar />
 
        <Routes>
        <Route path="/" element={ <Home/> } />
         
        </Routes>
      </div>

    </div>
  )
}

export default App
