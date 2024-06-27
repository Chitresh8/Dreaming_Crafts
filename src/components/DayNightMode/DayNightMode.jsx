/* eslint-disable no-unused-vars */
// import React, { useState } from "react";

// export const DayNightMode = () => {
//   const [mode, setMode] = useState(false);

//   const toggleMode = () => {
//     setMode(!mode);
//   };

//   const modeStyle = {
//     backgroundColor: mode ? "white" : "black", // if mode is true, set background color to black, else set to white
//     color: mode ? "black" : "white", // if mode is true, set text color to white, else set to black
//   };

//   return (
//     <div style={modeStyle}>
//       <button onClick={toggleMode}>
//         <div className="day">🌞</div>
//       </button>
//       <button onClick={toggleMode}>
//         <div className="night">🌜</div>
//       </button>
//     </div>
//   );
// };

import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material";

export const DayNightMode = () => {
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        className="dayNightMode"
        style={{}}
      >
        <h2>Toggle Dark mode</h2>
        <Switch
          checked={toggleDarkMode}
          onChange={toggleDarkTheme}
        />
      </div>
    </ThemeProvider>
  );
};
