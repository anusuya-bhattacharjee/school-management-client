import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Navbar/Navbar';
import Login from './Pages/Login/Login';
import ForgotPassword from './Pages/Login/ForgotPassword';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className="px-12">
     <Navbar></Navbar>
        <Routes >
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/forgot" element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>
    </div>
  );
}

export default App;
