import React, { useEffect } from "react";
import "../Css/LastBookingDetails.css";
import { useContext } from "react";
import BsContext from "../Context/BsContext";
import { seats } from "../data";

const LastBookingDetails = (props) => {
  const context = useContext(BsContext);

  const { handleGetLastBooking, lastBookingDetails } = context;

  useEffect(() => {
    //calling get last booking api to get the last booking details
    handleGetLastBooking();
  }, []);

  return (
    <div className="last_booking_details_container">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      {lastBookingDetails ? (
        <>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seat, index) => {
                return (
                  <li className="seat_value" key={index}>
                    {seat}: {lastBookingDetails.seats[seat]}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="slot">
            Slot: <span>{lastBookingDetails.slot}</span>
          </p>
          <p className="movie">
            Movie: <span>{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        <p>No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
