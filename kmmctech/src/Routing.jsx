/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState, useRef } from "react";
import Footer from "./pages/Footer";
import ProductsList from "./pages/products/ProductsList";
import ProductsDetails from "./pages/products/ProductsDetails";
import Contact from "./pages/Support";
import About from "./pages/About";
import Warranty from "./pages/Warranty";
import WarrantyDetails from "./pages/WarrantyDetails";


let baseUrl = ''
if (import.meta.env.MODE === "production") {
  baseUrl = "https://kmmctech-v1-api.vercel.app"
}
else {
  baseUrl = "http://localhost:5000"
}

function App() {
  const [navColor, setNavColor] = useState(false)
  const navScroll = useRef(null)
  const changeColor = (e) => {
    if (window.scrollY >= 320 && window.innerWidth > 966) {
      setNavColor(true)
    }
    else if (window.scrollY >= 100 && window.innerWidth <= 966) {
      setNavColor(true)
    }
    else {
      setNavColor(false)
    }
  }
  useEffect(() => {
    // const scroll = window.addEventListener('scroll', changeColor)
    // return () => scroll
  }, [])
  const Layout = ({ location }) => {
    console.log(location)
    return (
      <div className="layout" >
        {/* <header className={`nav ${navColor || location !== "/" ? 'nav-active' : ""}`}> */}
        <header className={'nav  nav-active'}>
          <Navbar baseUrl={baseUrl} />
        </header>
        <main id="main"  >
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout location={window.location.pathname} />}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category/:subCategory?" element={<ProductsList baseUrl={baseUrl} />} />
          <Route path="/product/:id" element={<ProductsDetails baseUrl={baseUrl} />} />
          <Route path="/support" element={<Contact />} />
          <Route path="/support/warranty" element={<Warranty baseUrl={baseUrl} />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/warranty/product/:serialNumber" element={<WarrantyDetails baseUrl={baseUrl} />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
