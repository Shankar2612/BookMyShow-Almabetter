import React, {useState} from 'react';
import RadioComponent from '../Components/RadioComponent';
import { moviesList } from '../data';

const SelectMovie = () => {
    
    const [movie, changeMovie] = useState("");
    return (
        <div className='main_container'>
            {moviesList.map((el, index) => {
                return <RadioComponent text={el} changeMovie={changeMovie} movie={movie}  key={index}/>
            })}
        </div >
    )
}

export default SelectMovie