import "./App.css";
import Header from "./components/header/header";
import Home from "./page/Home";
import CategoryShirt from "./components/Category/CategoryShirt";
import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryDrawer from "./components/Category/CategoryDrawer";
import CategoryJeans from "./components/Category/CategoryJeans";
import CategoryTShirt from "./components/Category/CategoryTShirt";
import CategoryTrousers from "./components/Category/CategoryTrousers";



function App() {
  return (
    <CartProvider>
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shirts" element={<CategoryShirt />} />
          <Route path="/jeans" element={<CategoryJeans />} />
  <Route path="/tshirts" element={<CategoryTShirt />} />
   <Route path="/trousers" element={<CategoryTrousers />} />
        </Routes>
      
    </CartProvider>
  );
}

export default App;
