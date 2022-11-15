import React, { useState } from "react";
import RadioComponent from "./RadioComponent";
import { seats } from "../data";
import "../Css/SelectSeats.css";

const SelectSeats = () => {
  const [seat, changeSeats] = useState([]);
  const [noOfseat, changeNoOfSeats] = useState({A1: 0, A2: 0, A3: 0, A4: 0, D1: 0, D2: 0 });
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
              changeNoOfSeats={changeNoOfSeats}
              noOfseat={noOfseat}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectSeats;
