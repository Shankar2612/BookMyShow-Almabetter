import LastBookingDetails from "../Components/LastBookingDetails";
import SelectMovie from "../Components/SelectMovie";
import SelectSeats from "../Components/SelectSeats";
import TimeShedule from "../Components/TimeShedule";
import Modal from "../Components/ModalComponent"
import "../Css/Home.css";
import BsContext from "../Context/BsContext";
import { useContext } from "react";

const Home = (props) => {
  const context = useContext(BsContext);
  const { showMsg, alert } = context;
  return (
    <>
      <Modal alert={alert} />
      <div className="container">
        <div className="selection_container">
          <SelectMovie />
          <TimeShedule />
          <SelectSeats />
      {/* on calling this function alert will be set with header (first argument)  and deatils(body) as second argument*/}
      <button onClick={() => { showMsg("Are you sure ?", "Details selected by the user Details selected by the user v Details selected by the user Details selected by the user Details selected by the user") } } className="BN-btn">Book Now</button>
        </div>
        <div className="last_booking_details_container">
          <LastBookingDetails />
        </div>
      </div>
    </>
  );
};

export default Home;
