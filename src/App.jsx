import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import { Home } from "./Routes/Routes";
import { Suspense, useState, useEffect } from "react";
import Footer from "./Layout/Footer";
import LoadingRing from "./Utils/Loader";

function App() {
  // Load cart from localStorage or initialize empty array
  const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartItemsFromLocalStorage);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart Function
  const handleAddToCart = (product) => {
    const productSelected = cart.find((item) => item._id === product._id);
    if (productSelected) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex justify-center items-center h-screen"><LoadingRing /></div>}>
        {/* ✅ Pass cart to Navbar */}
        <Navbar cart={cart} />
        
        <Routes>
          {/* ✅ Pass handleAddToCart to Home */}
          <Route path="/" element={<Home cart={cart} handleAddToCart={handleAddToCart} />} />
        </Routes>
        
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
