import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NavBar from "./components/nav/NavBar";
import BooksPage from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import AboutMePage from "./pages/AboutMe";
import ContactPage from "./pages/Contact";
import Footer from "./components/footer/Footer";

function ScrollToTopOnRedirect() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }); // Scroll al inicio de la página en cada cambio de ubicación
    }, 10);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename="/">
      <ScrollToTopOnRedirect />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookId" element={<BookDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
