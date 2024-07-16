import { useNavigate } from "react-router-dom";
import "./navBar.css";


export const NavBar = () => {
const navigate=useNavigate();
    const homeClickHandler=()=>{navigate('/')};
    const aboutUsClickHandler=()=>{navigate('/about-us')};
    const contactClickHandler=()=>{navigate('/contact')};
    const catalogueClickHandler=()=>{navigate('/catalogue')};
  return (
    <nav className="navBar">
      <div className="all-pages">
        <h4 onClick={homeClickHandler}>Home</h4 >
        <h4 onClick={catalogueClickHandler}>Catalogue</h4 >
        <h4 onClick={contactClickHandler}>Contact</h4 >
        <h4 onClick={aboutUsClickHandler}>About Us</h4>
      </div>
    </nav>
  );
};
