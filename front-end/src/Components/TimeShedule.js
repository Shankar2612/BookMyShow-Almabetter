import React, { useState } from "react";
import RadioComponent from "./RadioComponent";
import { slots } from "../data";
import "../Css/TimeShedule.css";

const TimeShedule = () => {
  const [time, changeTime] = useState("");
  return (
    <>
      <h1 className="TS_heading">Select a Schedule :-</h1>
      <div className="TS_main_container">
        {slots.map((el, index) => {
          return (
            <RadioComponent
              text={el}
              changeMovie={changeTime}
              movie={time}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default TimeShedule;
