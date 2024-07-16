import { AboutUs } from "./components/pages/About us/AboutUs";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { Contact } from "./components/pages/Contact/Contact";
import { Home } from "./components/pages/Home/Home";
import { Route, Routes } from "react-router-dom";
export const Router = () => {
  return (
    <div className="router">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/catalogue"
          element={<Catalogue />}
        />
      </Routes>
    </div>
  );
};
