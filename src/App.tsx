// import { useState } from 'react'
import '../001-Css/App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Details from './Pages/Details'
import StartPage from './Pages/StartPage'
function App() {


  // const x =localStorage.getItem('username')

  // if (x) {
  //   console.log(x)
  // }
  return (
    <>
      <Routes>

      </Routes>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<StartPage/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/details/:id' element={<Details />} />


        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Take Size */}
      {/* <div className='h-80'></div> */}
 
      <Footer></Footer>

    </>
  )
}

export default App
{/* <Route path='/Book/:bookId' element={<BookDetails/>} /> */ }
