/* eslint-disable no-unused-vars */
import React from "react";
import "./header.css";
import { DayNightMode } from "../DayNightMode/DayNightMode";

export const Header = () => {
  return (
    <div className="header">
      <img
        className="dreamingCrafts"
        src="https://scontent.fdel10-1.fna.fbcdn.net/v/t39.30808-6/326396048_2793668380770015_1877934029798085118_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=LgSxjcBHOMEQ7kNvgG0OXm4&_nc_ht=scontent.fdel10-1.fna&oh=00_AYBTA4PlMskOVpw1MMdf1w028VW3Z4giaO04DoobPUwVVA&oe=66819FC1"
        alt="dreaming_crafts"
      />
      <h6>Handmade Gifts Own making</h6>
      <DayNightMode />
    </div>
  );
};
