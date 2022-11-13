import React, {useState} from 'react';
import RadioComponent from '../Components/RadioComponent';
import { slots } from '../data';

const TimeShedule = () => {
    
    const [time, changeTime] = useState("");
    return (
        <div className='main_container'>
            {slots.map((el, index) => {
                return <RadioComponent text={el} changeMovie={changeTime} movie={time}  key={index} />
            })}
        </div >
    )
}

export default TimeShedule