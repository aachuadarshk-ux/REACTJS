import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Book from './Pages/Book';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/book" element={<Book/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
    </div>
  );
}

export default App;
