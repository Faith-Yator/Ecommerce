import { useState } from 'react'
import{BrowserRouter, Route, Routes} from 'react-router-dom' 
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import OrderManagement from './pages/OrderManagement'
import Computer from './pages/Computer'
import Homeappliances from './pages/Homeappliances'
import Tvs from './pages/Tvs'
import Smartphones from './pages/Smartphones'
import Printers from './pages/Printers'
import Networking from './pages/Networking'
import Cart from './pages/Cart'
import HelpCenter from './pages/HelpCenter'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import OrderCancellation from './pages/OrderCancellation'
import Home from './pages/Home'
import Delivery from './pages/Delivery'
import Description from './pages/Description'
import LogIn from './pages/LogIn'
import SignIn from './pages/SignIn'
import DeliveryPage from './pages/DeliveryPage'
import TrackOrderPage from './pages/TrackorderPage'
import FaqPage from './pages/Faq'
import PaymentPage from './pages/PaymentPage'
import AdminLogIn from './pages/Admin'
import Logout from './pages/Logout'




function App () {
  const [count, setCount] = useState(0)
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
    
     <Routes>
    
      <Route path='/adminlogin' element={<AdminLogIn/>} />
      <Route path='/' element={<Home />}/>
      <Route path='/computer' element={<Computer/>}/>
      <Route path='/homeappliances' element={<Homeappliances/>}/>
      <Route path='/printers' element={<Printers/>}/>
      <Route path='/networking' element={<Networking/>}/>
      <Route path='/smartphones' element={<Smartphones/>}/>
      <Route path='/tvs' element={<Tvs/>}/>
      <Route path='/OrderManagement' element={<OrderManagement/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/HelpCenter' element={<HelpCenter/>}/>
      <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/OrderCancellation' element={<OrderCancellation/>}/>
      <Route path='/Delivery' element={<Delivery/>}/>
      <Route path='/description' element={<Description/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/deliverypage' element={<DeliveryPage/>}/>
      <Route path='/trackorderpage' element={<TrackOrderPage/>}/>
      <Route path='/questions' element={<FaqPage/>}/>
      <Route path='/payment' element={<PaymentPage/>}/>
      <Route path='/logout' element={<Logout/>}/>
           </Routes>
       
     <Footer/>
      </BrowserRouter> 
       
    </>
  )
}

export default App
