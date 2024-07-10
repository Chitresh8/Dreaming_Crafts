// /* eslint-disable no-unused-vars */
// import React from "react";
// import "./header.css";
// // import { DayNightMode } from "../DayNightMode/DayNightMode";
// import { Link } from "react-router-dom";
// //import { NavBar } from "../NavBar";

// export const Header = () => {
//   return (
//     <div className="header">
//       <div>
//         <img
//           className="dreamingCrafts"
//           src="https://scontent.fdel10-1.fna.fbcdn.net/v/t39.30808-6/326396048_2793668380770015_1877934029798085118_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LgSxjcBHOMEQ7kNvgG0OXm4&_nc_ht=scontent.fdel10-1.fna&oh=00_AYBTA4PlMskOVpw1MMdf1w028VW3Z4giaO04DoobPUwVVA&oe=66819FC1"
//           alt="dreaming_crafts"
//         />
//         <h6 className="quote">Handmade Gifts Own making</h6>
//       </div>
//       <nav>
//         {/* <ul className="nav-links">
//           <li>
//             <a href="#home">Home</a>
//             <Link to="/home" />
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#products">Products</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul> */}
//         <Link to="/about-us">About Us</Link>
//         <Link to="/catalogue">Catalogue</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/home">Home</Link>
//       </nav>

//       {/* <DayNightMode /> */}
//     </div>
//   );
// };

/* eslint-disable no-unused-vars */
import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="dreamingCrafts"
          src="https://scontent.fdel10-1.fna.fbcdn.net/v/t39.30808-6/326396048_2793668380770015_1877934029798085118_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LgSxjcBHOMEQ7kNvgG0OXm4&_nc_ht=scontent.fdel10-1.fna&oh=00_AYBTA4PlMskOVpw1MMdf1w028VW3Z4giaO04DoobPUwVVA&oe=66819FC1"
          alt="dreaming_crafts"
        />
        <h6 className="quote">Handmade Gifts Own making</h6>
      </div>
    </div>
  );
};
