import React, { useState, useEffect } from 'react';
import Tile from '../components/Tile';
import '../styles/Home.css';

const tiles = Array.from(Array(36));

let i = 1;
while (tiles.includes(undefined) && i <= 18) {
    let pos1 = Math.floor(Math.random() * 36);

    if (tiles[pos1] === undefined && !tiles.includes(i)) {
        tiles.splice(pos1, 1, i);
        i++;
    } else {
        continue;
    }

}
let j = 1;
while (tiles.includes(undefined) && j <= 18) {
    let pos1 = Math.floor(Math.random() * 36);

    if (tiles[pos1] === undefined) {
        tiles.splice(pos1, 1, j);
        j++;
    } else {
        continue;
    }

}


const Home = () => {
    const [globalClick, setGlobalClick] = useState(true);
    const [numClicks, setNumClicks] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (numClicks > 1) {
                setGlobalClick(false);
                setNumClicks(0);
            }

        }, 2000);
    }, [numClicks])
    console.log(numClicks)
    return (
        <div className="Home">
            {tiles.map((t, i) => (
                <div className='tile'>
                    <Tile tile={t} key={i} globalClick={globalClick} setGlobalClick={setGlobalClick} numClicks={numClicks} setNumClicks={setNumClicks} />
                </div>
            ))}
        </div>
    )
}

export default Home;
