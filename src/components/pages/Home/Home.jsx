/* eslint-disable no-unused-vars */
import React from "react";
import "./home.css";
import { Card } from "./Card/Card";

export const Home = () => {
  return (
    <>
      <h3>Home</h3>
      <Card
        title="Card Title 1"
        description="This is a description for card 1."
        image="IMG-20240628-WA0016.jpg"
      >
        <button>Click Me</button>
      </Card>
    </>
  );
};
