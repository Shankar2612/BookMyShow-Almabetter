import React from "react";
import LastBookingDetails from "../Components/LastBookingDetails";
import SelectMovie from "../Components/SelectMovie";
import SelectSeats from "../Components/SelectSeats";
import TimeShedule from "../Components/TimeShedule";
import "../Css/Home.css";

const Home = (props) => {
  return (
    <div className="container">
      <div className="selection_container">
        <SelectMovie />
        <TimeShedule />
        <SelectSeats />
      </div>
      <div className="last_booking_details_container">
        <LastBookingDetails />
      </div>
    </div>
  );
};

export default Home;
