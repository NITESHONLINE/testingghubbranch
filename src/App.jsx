import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

// alt + shift + o => remove unwanted imports

function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    
    </>
  );
}

export default App;
