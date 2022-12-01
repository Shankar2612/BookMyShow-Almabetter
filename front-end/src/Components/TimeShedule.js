import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { slots } from "../data";
import "../Css/TimeShedule.css";
import BsContext from "../Context/BsContext";

const TimeShedule = () => {
  const context = useContext(BsContext);
  
  // Getting time and change changeTime components from the context.
  const { time, changeTime} = context;
  return (
    <>
      <h1 className="TS_heading">Select a Schedule :-</h1>
      <div className="TS_main_container">
        {slots.map((el, index) => {
          return (
            <RadioComponent
              text={el}
              changeSelection={changeTime}
              data={time}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default TimeShedule;
