import React from "react";
import "../Css/RadioComponent.css";

const RadioComponent = ({ text, changeMovie, movie }) => {
  const handleChecked = (value) => {
    changeMovie(value);
  };

  return (
    <div
      name={text}
      className={`form-check-label ${movie === text ? "active" : "inactive"}`}
      onClick={() => {
        handleChecked(text);
      }}>
      <span className={"text"}>{text}</span>

    </div>
  );
};

export default RadioComponent;
