import React, { useState } from "react";
import RadioComponent from "./RadioComponent";
import { seats } from "../data";
import "../Css/SelectSeats.css";

const SelectSeats = () => {
  const [seat, changeSeats] = useState("");
  return (
    <>
      <h1 className="SS_heading">Select Seats :-</h1>
      <div className="SS_main_container">
        {seats.map((el, index) => {
          return (
            <RadioComponent
              text={el}
              changeMovie={changeSeats}
              movie={seat}
              key={index}
              seats={seats}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectSeats;
