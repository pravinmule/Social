import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import './App.css';
import Newsfeed from "./pages/Newsfeed";
import Todo from "./pages/Todo";
function App() {

  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/newsfeed" element={<Newsfeed/>} />
      </Routes>
      </BrowserRouter>
  )
}
 

export default App;
