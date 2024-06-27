import "./App.css";
import { AboutUs } from "./components/pages/About us/AboutUs";
import { Catalogue } from "./components/pages/Catalogue/Catalogue";
import { Contact } from "./components/pages/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Home } from "./components/pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <>
      <div className="app_container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              element={<AboutUs />}
              path="/about-us"
            />
            <Route
              element={<Contact />}
              path="/contact"
            />
            <Route
              element={<Catalogue />}
              path="/catalogue"
            />
            <Route
              element={<Home />}
              path="/home"
            />
          </Routes>
        </BrowserRouter>
        <Header />
      </div>
    </>
  );
}

export default App;
