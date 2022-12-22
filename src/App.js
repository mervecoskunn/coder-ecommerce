import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import WishList from "./Pages/WishList/WishList";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Naav from "./Components/Nav/Naav";
import Footer from "./Components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import  './App.scss'

function App() {
  return (
    <div className="App">
      <Naav />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer position="top-right"></ToastContainer>
    </div>
  );
}

export default App;
