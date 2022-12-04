import React, { useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  //error popup
  const [errorPopup, setErrorPopup] = useState(false);

  //error message
  const [errorMessage, setErrorMessage] = useState("");

  // time slot which the user selects.
  const [time, changeTime] = useState("");

  // Movie which the user selects.
  const [movie, changeMovie] = useState("");

  // No of seats which the user selects.
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    D1: 0,
    D2: 0,
  });

  // Last movie booking details.
  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  // handling post request to save booking details on the backend
  const handlePostBooking = async () => {
    // Sending api request to backend with user selected movie, slot and seats to book movie.
    const response = await fetch(`http://localhost:8080/api/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
    });

    const data = await response.json();

    //showing message from backend on popup to user whether success or error
    setErrorPopup(true);
    setErrorMessage(data.message);

    if (response.status === 200) {
      //reset the state on success
      changeTime("");
      changeMovie("");
      changeNoOfSeats({
        A1: 0,
        A2: 0,
        A3: 0,
        A4: 0,
        D1: 0,
        D2: 0,
      });
      setLastBookingDetails(data.data);
    }
  };

  //handle get request to get the last booking details from backend
  const handleGetLastBooking = async () => {
    const response = await fetch(`http://localhost:8080/api/booking`, {
      method: "GET",
    });

    const data = await response.json();

    // Setting last booking details recieved from the backend.
    setLastBookingDetails(data.data);
  };

  return (
    // providing all the required data to app
    <BsContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
      }}>
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
