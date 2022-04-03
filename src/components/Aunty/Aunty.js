import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = ({ house }) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <p>Gift: {ring}</p>
        </div>
    );
};

export default Aunty;