import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const homeClickHandler = () => {
    navigate("/");
  };

  return (
    <>
      <h3 onClick={homeClickHandler}>Home</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        praesentium odit cumque sequi dolorum libero, veritatis eius ea
        exercitationem, dolore illo quod ullam beatae velit voluptate nesciunt
        ab, ipsum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        praesentium odit cumque sequi dolorum libero, veritatis eius ea
        exercitationem, dolore illo quod ullam beatae velit voluptate nesciunt
        ab, ipsum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        praesentium odit cumque sequi dolorum libero, veritatis eius ea
        exercitationem, dolore illo quod ullam beatae velit voluptate nesciunt
        ab, ipsum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        praesentium odit cumque sequi dolorum libero, veritatis eius ea
        exercitationem, dolore illo quod ullam beatae velit voluptate nesciunt
        ab, ipsum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        praesentium odit cumque sequi dolorum libero, veritatis eius ea
        exercitationem, dolore illo quod ullam beatae velit voluptate nesciunt
        ab, ipsum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        praesentium odit cumque sequi dolorum libero, veritatis eius ea
        exercitationem, dolore illo quod ullam beatae velit voluptate nesciunt
        ab, ipsum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        praesentium odit cumque sequi dolorum libero, veritatis eius ea
        exercitationem, dolore illo quod ullam beatae velit voluptate nesciunt
        ab, ipsum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        praesentium odit cumque sequi dolorum libero, veritatis eius ea
        exercitationem, dolore illo quod ullam beatae velit voluptate nesciunt
        ab, ipsum non.
      </p>
    </>
  );
};
