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

    // Whole data which the user selects.

    // Setting alert on calling this message (used in Home.js)
    const showMsg = (head, body) => {
        setAlert({
            head: head,
            body: body

        })
    }

    // checking if the user is ok with the details. if yes pushing the data to database (todo)
    const ok = () => {
        console.log("user is ok with details");
        console.log(movie, time, noOfseat);
        setAlert(null);
    }

    // if the user is not  okay then wait till change of dada (todo)
    const notOk = () => {
        console.log("user said he is not okay with details");
        setAlert(null);
    }
    return (
        <BsContext.Provider value={{ showMsg, alert, ok, notOk, movie, changeMovie, time, changeTime, noOfseat, changeNoOfSeats }}>
            {props.children}
        </BsContext.Provider>
    )
}

export default BsState