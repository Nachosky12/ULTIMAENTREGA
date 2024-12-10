import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


import Home from "./components/Home/Home";

import About from "./components/About/About";
import ContactPage from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import ItemDetail from "./components/Itemdetail/ItemDetail";
import ProductsCategory from "./components/Category/Category";
import { Carrito } from "./components/Carrito/Carrito";


function App(){
    return(
        <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/category/:categoryId' element={<ProductsCategory />} />
                <Route path='/products/:productId' element={<ItemDetail />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<ContactPage />} />
                
            </Routes>
            <Footer/>
        </BrowserRouter>  
        </>
    )
};

export default App;