import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handelHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <button onClick={handelHouseIncrease}>Aunty Magic</button>
        </div>
    );
};

export default Aunty;