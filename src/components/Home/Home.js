import React, { useEffect, useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handelAddToCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('This Item is Already Added');
        }

    }

    const handelRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handelAddToCart={handelAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handelRemoveFromCart={handelRemoveFromCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;