import React from "react";
import "../Css/RadioComponent.css";

const RadioComponent = ({ text, changeMovie, movie, seats, changeNoOfSeats, noOfseat}) => {
  const handleChecked = (value) => {
    changeMovie(value); 
  };
  // only for selecting seats.
  const change_seats = (e) => {
    changeNoOfSeats({...noOfseat, [e.target.name]: e.target.value});
 }
  return (
    <div
    name={text}
      className={`form-check-label ${seats && "seats"} ${
        movie === text ? "active" : "inactive"
      }`}
      onClick={() => {
        handleChecked(text);
      }}>
      <span className={"text"}>{text}</span>
      {seats && (
        <input
          type="number"
          className="seats-input"
          placeholder="0"
          name={text}
          min="0"
          max="30"
          onChange={change_seats}
        />
      )}
    </div>
  );
};

export default RadioComponent;
