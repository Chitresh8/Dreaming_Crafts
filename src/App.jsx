import "./App.css";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { Body } from "./components/Body/Body";
import {data} from '../data.js';

function App() {
  const [dayNightMode, setDayNightMode] = useState(false);
  const [datas/*, setDatas*/]=useState(data);
  const [inputsDt,setInputsDt]=useState('');

  const darkModeHandler = () => {
    setDayNightMode(!dayNightMode);
  };

  const inputChangeHandler2=(event)=>{
    setInputsDt(event.target.value);
  };
  // const searchClickHandler=()=>{
  //  const filters=datas.filter((el)=>{
  //   return el.toLowerCase().includes(inputsDt);
  //  })
  //  setDatas(filters);
  // };

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
        <input type='text' name='name' value={inputsDt} onChange={inputChangeHandler2} />
        <button>Search</button>
        {datas.filter((el)=>{
          return inputsDt.toLowerCase()===''?el:el.toLowerCase().includes(inputsDt);
        }).map((el)=>{
          return <div key={el.id}>
            {el}
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
