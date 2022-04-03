import React from 'react';
import './Cart.css';

const Cart = ({ cart, handelRemoveFromCart }) => {
    // Conditional rendaring option
    // 1. Element variable
    // 2. turnary operation. condition ? true : false
    // 3. && operator.
    // 4. || operator.
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Ohh Kipta. Khoroch kor</h5>
            <p>Kichu kin</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please Add more then one item</p>
    }
    else {
        command = <p><small>Thanks For Adding Item</small></p>
    }


    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handelRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>Yeaa!! You Are Buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon k Ki Gift diba</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep Adding..</p> : <button>Clear All</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;