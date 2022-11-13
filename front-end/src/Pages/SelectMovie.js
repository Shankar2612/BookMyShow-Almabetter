import React, {useState} from 'react';
import RadioComponent from '../Components/RadioComponent';
import { moviesList } from '../data';
import "../Css/SelectMovie.css"

const SelectMovie = () => {
    
    const [movie, changeMovie] = useState("");
    return (
        <>
        <h1 className='heading' >Select a movie :-</h1>
        <div className='SM_main_container'>
            {moviesList.map((el, index) => {
                return <RadioComponent text={el} changeMovie={changeMovie} movie={movie}  key={index}/>
            })}
        </div >
        </>
    )
}

export default SelectMovie