// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Sesuaikan dengan nama file yang benar
import Hero from "./components/Hero"; // Sesuaikan dengan nama file yang benar
import Footer from "./components/Footer"; // Sesuaikan dengan nama file yang benar
import Menu from "./pages/Menu"; // Sesuaikan dengan nama file yang benar
import AboutUs from "./pages/AboutUs"; // Sesuaikan dengan nama file yang benar
import Contact from "./pages/Contact"; // Sesuaikan dengan nama file yang benar

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Routes>
          <Route exact path="/" component={Menu} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
