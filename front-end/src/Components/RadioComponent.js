import React from 'react';
import "../Css/RadioComponent.css"

const RadioComponent = ({ text, changeMovie, movie }) => {

    const handleChecked = (value) => {
        changeMovie(value);
    }
    return (
        <div className={`form-check-label ${movie === text ? "active" : "inactive"}`}  onClick={() => { handleChecked(text) }}>
            {text}
        </div>
    )
}

export default RadioComponent