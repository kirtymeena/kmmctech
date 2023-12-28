import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "./pages/Footer";
import ProductsList from "./pages/products/ProductsList";
import ProductsDetails from "./pages/products/ProductsDetails";

function App() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   setScrollY(window.scrollY)

    // })
  })
  const Layout = ({ location }) => {
    const scrollPos = location === "/" ? 400 : 0;
    return (
      <div className="layout">
        <header className={`nav  ${scrollY >= scrollPos ? "nav__scroll" : ""} `}>
          <Navbar textColor={scrollY >= 400 ? "black" : ""} />
        </header>
        <main id="main">
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
          <Route path="/products/:category/:subCategory?" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
