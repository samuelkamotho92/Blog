import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Blogs from './Components/Blog'
import Login from './Pages/Login';
import Register from './Pages/Register';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Error from './Pages/Error';
import Header from './Components/Header';
import Blog from './Pages/Blog';
function App() {
  const user = false;
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
      <Route exact  path='/' element={ <Blogs />}/>
      <Route path='/blog/:id' element={<Blog />} />
      <Route path='/login' element={user ? <Navigate to={'/'} />:<Login />} />
      <Route path='/register' element={user ? <Navigate to={'/'} />:<Register />} />
      <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
