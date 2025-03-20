import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import { Home } from "./Routes/Routes";
import { Suspense, useState, useEffect } from "react";
import Footer from "./Layout/Footer";
import LoadingRing from "./Utils/Loader";
import ProductDetails from "./Pages/ProductDetails";
import FoodTypes from "./Pages/FoodTypes";
import { Toaster, toast } from "sonner"; // ✅ Import Sonner
import Cart from "./Pages/Cart";

function App() {
  // Load cart from localStorage or initialize empty array
  const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartItemsFromLocalStorage);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Centralized Add to Cart Function with Sonner Toast
  const handleAddToCart = (product) => {
    const productSelected = cart.find((item) => item._id === product._id);
    
    if (productSelected) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // ✅ Dismiss previous notification & show only one toast at a time
    toast.dismiss();
    toast(`${product.title} added to cart`, { position: "bottom-right" });
  };

  return (
    <BrowserRouter>
      {/* ✅ Sonner toaster setup */}
      <Toaster position="bottom-right" />

      <Suspense fallback={<div className="flex justify-center items-center h-screen"><LoadingRing /></div>}>
        <Navbar cart={cart} />
        
        <Routes>
          <Route path="/" element={<Home cart={cart} handleAddToCart={handleAddToCart} />} />
          <Route path="/product/:id" element={<ProductDetails cart={cart} handleAddToCart={handleAddToCart} />} />
          <Route path="/" element={<FoodTypes cart={cart} handleAddToCart={handleAddToCart} />} />
          <Route path="Cart" element={<Cart />} />
        </Routes>

        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;