import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Mano = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h5>Mano</h5>
            <p>Gift: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy A House</button>
        </div>
    );
};

export default Mano;