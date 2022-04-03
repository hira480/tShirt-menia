import React from 'react';
import Mano from '../Mano/Mano';

const Myself = ({ house, ornament }) => {
    return (
        <div>
            <h4>Hira</h4>
            <p><small>House: {house}</small></p>
            <Mano ></Mano>
        </div>
    );
};

export default Myself;