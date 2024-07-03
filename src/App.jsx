import "./App.css";
import { AboutUs } from "./components/pages/About us/AboutUs";
import { Contact } from "./components/pages/Contact/Contact";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { Home } from "./components/pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { Body } from "./components/Body/Body";

function App() {
  const [dayNightMode, setDayNightMode] = useState(false);

  const darkModeHandler = () => {
    setDayNightMode(!dayNightMode);
  };

  const backgroundColor = {
    backgroundColor: dayNightMode ? "black" : "white",
    color: dayNightMode ? "white" : "black",
    height: "max-content",
    width: "100vw",
  };

  return (
    <div style={backgroundColor}>
      <div className="app_container">
        <Header />

        {dayNightMode ? (
          <div className="darkMode">
            <p>
              Switch to{" "}
              <button
                className="lightBtn"
                onClick={darkModeHandler}
              >
                Light mode
              </button>
            </p>
          </div>
        ) : (
          <div className="darkMode">
            <p>
              Switch to{" "}
              <button
                className="darkBtn"
                onClick={darkModeHandler}
              >
                Dark mode
              </button>
            </p>
          </div>
        )}
        <Body />
        <BrowserRouter>
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
      </div>
    </div>
  );
}

export default App;
