/* eslint-disable no-unused-vars */
import React from "react";
import "./header.css";
import { NavBar } from "../NavBar";
import dreamingCraftsImg from '../../assets/dreamingCrafts.jpg';


export const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="dreamingCrafts"
          src={dreamingCraftsImg}
          alt="dreaming_crafts"
        />
        <h6 className="quote">Handmade Gifts Own making</h6>
      </div>
      <NavBar />
      
    </div>
  );
};

