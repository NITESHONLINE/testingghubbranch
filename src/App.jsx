import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// alt + shift + o => remove unwanted imports

function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    
    </>
  );
}

export default App;
