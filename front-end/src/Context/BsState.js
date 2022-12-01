import React, { useState } from 'react'
import BsContext from './BsContext'

const BsState = (props) => {
    // Used for setting alert.
    const [alert, setAlert] = useState(null);

    // time slot which the user selects.
    const [time, changeTime] = useState("");

    // Movie which the user selects.
    const [movie, changeMovie] = useState("");

    // No of seats which the user selects.
    const [noOfseat, changeNoOfSeats] = useState({ A1: 0, A2: 0, A3: 0, A4: 0, D1: 0, D2: 0 });

    // Last movie booking details.
    const [L_B_D, setL_B_D] = useState("No last bookig deatils found");



    // Setting alert on calling this message (used in Home.js)
    const showMsg = (head, body) => {
        setAlert({
            head: head,
            body: body !== null ? body : movie

        })
    }

    // checking if the user is ok with the details. if yes pushing the data to database 
    const ok = async () => {

        // Sending api request to backend with user selected movie, slot and seats to book movie. (getting tha api)
        setAlert(null);
        const response = await fetch(`http://localhost:8080/api/booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ movie: movie, slot: time, seats: noOfseat })
        });
        
        // Specifying the user that the movie has successfully been booked.
        showMsg("Movie booked successfully", response.movie);
        setAlert(null);

        // Sending api request to backend to get the last movie booking details. (not working properly.)
        const last_Booking_Details = await fetch(`http://localhost:8080/api/booking`, {
            method: 'GET'
        });

        // Setting last booking details recieved by the api.
        setL_B_D(last_Booking_Details);
    }

    // if the user is not  okay then wait till change of dada (todo)
    const notOk = () => {
        console.log("user said he is not okay with details");
        setAlert(null);
    }
    return (
        // providing all the required data to app
        <BsContext.Provider value={{ showMsg, alert, ok, notOk, movie, changeMovie, time, changeTime, noOfseat, changeNoOfSeats, L_B_D }}>
            
            {props.children}
        </BsContext.Provider>
    )
}

export default BsState