import React, { createContext, useState } from 'react';
import './GrandPa.css';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

/* 
context api
1. call create context with a default value.
2. set a variable of the context with uppercase
3. make sure you export the context to use it in other place.
4. wrape your child content using ContextName.Provider 
5. use a value.
6. to nonsume the context from child component
7. useContext hook and you will need to pass the contextName.
*/
export const RingContext = createContext('Diamond');

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handelBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h4>GrandPa</h4>
                <p>House: {house} <button onClick={handelBuyAHouse}>Buy A House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;