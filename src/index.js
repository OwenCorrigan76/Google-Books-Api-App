import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BookContextProvider from "./contexts/bookContext";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <React.StrictMode>
      <BookContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <App />
        <Search />
        <div className="footer">
          <Footer year={new Date().getFullYear()} />
        </div>
      </BookContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
