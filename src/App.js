
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/Assets/banner_mens.png';
import women_banner from './Components/Assests/Assets/banner_women.png';
import kids_banner from './Components/Assests/Assets/banner_kids.png';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"></ShopCategory>}></Route>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"></ShopCategory>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"></ShopCategory>}></Route>
        <Route path='/products' element={<Product></Product>  
      }>
         <Route path=":productID" element={<Product></Product>}></Route>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
