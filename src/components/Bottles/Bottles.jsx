import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../../utilities/localStorage";
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, [])
    useEffect(() => {
        console.log(bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart);
        }
    }, [bottles])
    const handleAddToCart = bottle => {
        // console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id)
    }
    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <h3>Cart: {cart.length}</h3>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle bottle={bottle} key={bottle.id}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;