import React from 'react'

import style from './Index.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fashion from './Components/Fashion/Fashion'
import Header from './Components/Header/Header'
import Home_Living_Navbar from './Components/Home&Living_Navbar/Home_Living_Navbar'
import Items from './Components/Items/Items'
import Navbar from './Components/Navbar/Navbar'
import ProductCard from './Components/ProductCard/ProductCard'
import Topbar from './Components/Topbar/Topbar'
import NProduct from './Components/NProduct/NProduct'
import TableProduct from './Components/TableProduct/TableProduct'
import Pant from './Components/PantProduct/Pant'
import Sneakers from './Components/Sneakers/Sneakers'
import Short from './Components/ShortPant/Short'
import Glass from './Components/Sunglass/Glass'
import FTShirt from './Components/FullSleveTShirt/FTShirt'
import Sandal from './Components/Sandal/Sandal'
import FullShrit from './Components/FullSleveShirt/FullShrit'
import Bed from './Components/Bed/Bed'
import Chair from './Components/Chair/Chair'

import Door from './Components/Door/Door'
import Sofa from './Components/Sofa/Sofa'
import Watch from './Components/Watch/Watch'
import Window from './Components/Window/Window'
import LogIn from './Components/LogInForm/LogIn'
import Middle from './Components/MiddleContent/Middle'
import SignUp from './Components/SignUp/SignUp'
import Footer from './Components/Footer/Footer'



function App() {
  return (
    <>
      <BrowserRouter>
      <Topbar />
      <Header />
      <Navbar />
        <Routes>
          <Route path='/' element={<Middle />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          {/* home and living starts here */}
          <Route path='/Home&Living' element={<Home_Living_Navbar />} />
          <Route path='/Home&Living/Table' element={<TableProduct />} />
          <Route path='/Home&Living/Chair' element={<Chair />} />
          <Route path='/Home&Living/Door' element={<Door />} />
          <Route path='/Home&Living/Bed' element={<Bed />} />
          <Route path='/Home&Living/Sofa' element={<Sofa />} />
          <Route path='/Home&Living/Window' element={<Window />} />
          {/* home and living ends here */}
          {/* fashion starts here */}
          <Route path='/fashion' element={<Fashion />} />
          <Route path='/fashion/full-shirt' element={<FullShrit />} />
          <Route path='/fashion/full-t-shirt' element={<FTShirt />} />
          <Route path='/fashion/pant' element={<Pant />} />
          <Route path='/fashion/sandal' element={<Sandal />} />
          <Route path='/fashion/sunglass' element={<Glass />} />
          <Route path='/fashion/shorts' element={<Short />} />
          <Route path='/fashion/sneakers' element={<Sneakers />} />
          <Route path='/fashion/watch' element={<Watch />} />
          {/* fashion ends here */}
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App

