import React, { useState, useEffect } from 'react';

import '../styles/Tile.css';

let num = 0;

const Tile = ({ tile, globalClick, setGlobalClick, numClicks, setNumClicks }) => {
    const [clicked, setClicked] = useState(false);

    const [clicksArray, setClicksArray] = useState([]);

    // useEffect(() => {

    //     if (numClicks === 0 && clicked) {
    //         setGlobalClick(true);

    //     }

    // }, [numClicks])

    const handleClick = () => {
        if (numClicks <= 1) {
            setClicked(!clicked);
            setGlobalClick(true);
            setClicksArray([...clicksArray, clicked]);
            num++;
            setNumClicks(num);
            console.log(clicksArray)
        }
    }

    return (
        <div onClick={handleClick} className='container'>
            {globalClick && <span className={clicked ? 'number_shown' : 'number_hidden'} >{tile}</span>}
        </div>

    )
}

export default Tile
