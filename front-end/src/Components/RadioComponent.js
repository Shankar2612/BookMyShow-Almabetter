import React from 'react';
import "../Css/RadioComponent.css"

const RadioComponent = ({ text, changeMovie, movie, seats }) => {

    const handleChecked = (value) => {
        changeMovie(value);
    }
    return (
        <div className={`form-check-label ${seats && "seats"} ${movie === text ? "active" : "inactive"}`}  onClick={() => { handleChecked(text) }}>
            <span className={seats && "seats-text"}>{text}</span>
            {seats && <input type="number" className='seats-input' placeholder='0' min="0" max="30" />}
        </div>
    )
}

export default RadioComponent