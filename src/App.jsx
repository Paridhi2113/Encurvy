import "./App.css";
import Header from "./components/header/header";
import Home from "./page/Home";
import CategoryShirt from "./components/Category/CategoryShirt";
import { CartProvider } from "./contexts/CartContext";
import { Routes, Route, useLocation } from "react-router-dom";
import CategoryJeans from "./components/Category/CategoryJeans";
import CategoryTShirt from "./components/Category/CategoryTShirt";
import CategoryTrousers from "./components/Category/CategoryTrousers";
import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second loader

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <CartProvider>
      {loading && <Loader />}

      {!loading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shirts" element={<CategoryShirt />} />
            <Route path="/jeans" element={<CategoryJeans />} />
            <Route path="/tshirts" element={<CategoryTShirt />} />
            <Route path="/trousers" element={<CategoryTrousers />} />
          </Routes>
        </>
      )}
    </CartProvider>
  );
}

export default App;