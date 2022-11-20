import React, { useState, useContext } from "react";
import { seats } from "../data";
import "../Css/SelectSeats.css";
import BsContext from "../Context/BsContext";
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  const [seat, changeSeats] = useState([]);
  const context = useContext(BsContext);
  const { noOfseat, changeNoOfSeats} = context;
  return (
    <>
      <h1 className="SS_heading">Select Seats :-</h1>
      <div className="SS_main_container">
        {seats.map((el, index) => {
          return (
           <SeatsInput 
           seat={seat} 
           key={index} 
           index={index} 
           changeSeats={changeSeats} 
           noOfseat={noOfseat} 
           text={el} 
           changeNoOfSeats={changeNoOfSeats}/>
          );
        })}
      </div>
    </>
  );
};

export default SelectSeats;
