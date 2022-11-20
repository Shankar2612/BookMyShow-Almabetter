import React from 'react';
import "../Css/SeatsInput.css"

const SeatsInput = ({changeNoOfSeats, noOfseat, changeSeats, seat, text, index}) => {
    const change_seats = (e ) => {
        changeNoOfSeats({...noOfseat, [e.target.name]: e.target.value});
     }
     const handleChecked = (text) => {
        changeSeats(text); 
      };
  return (
    <div
    name={text}
    // todo -> adding active class based on seat value. {noOfseat.text}
    className={`form-check-label seats ${seat === text ? "active" : "inactive"}`}
    id={`${index}text`}
      onClick={() => {
        handleChecked(text, index);
      }}>
      <span className={"text"}>{text}</span>
        <input
          type="number"
          className="seats-input"
          placeholder="0"
          name={text}
          min="0"
          id={`${index}input`}
          max="30"
          onChange={change_seats}
        />
    </div>
  )
}

export default SeatsInput