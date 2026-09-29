import { useState } from 'react';

export default function useCart(){
    // useState privatefield gibi bişey 
    // cart değişkeninin değerini olumamı sağlar set cart ise o değeri güncellemeye yarar
    // başlangıç için boş bir dizi 
    const [cart, setCart] = useState([]);

    // sepete urun ekleme metodu 
    const addToCart = (product) =>{
        setCart((prevCart) =>{
            // cheching if the item already exist in cart
            const existingItem = prevCart.find(item => item.id === product.id);

            if(existingItem){
                //If it exist icrease quantity
                return prevCart.map(item => 
                    item.id === product.id
                    ? { ...item, quantity: item.quantity + 1}
                    : item
                );
            }

            // If not exists add as new product
            return [...prevCart, {...product, quantity: 1}];
        });
    };

    // Property that calculates sum cost of cart
    const cartTotal = cart.reduce((total,item) => total + (item.price * item.quantity), 0);

    return {
        cart,
        addToCart,
        cartTotal
    };
}