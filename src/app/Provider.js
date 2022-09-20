import { createContext, useState } from "react";

const Provider = ({ children }) => {
    const [cart, setCart] = useState([]);
    let carrito = [];
    const addItem = (art, cantidad) => {
        
        existeItem(art.id) ? cart.find((item) => item.art.id === art.id).cantidad += cantidad :carrito.push({art,cantidad});
        setCart([...cart,...carrito]);
     };
    const existeItem = (id) => {
        return  (cart.find((item) => item.art.id === id) ? true : false);
    };
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.art.id !== id));

    };
    const clear = () => {
        setCart([]);
    };

    return(
        <AppContext.Provider value={{cart, addItem, existeItem,removeItem,clear}}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;
export const AppContext = createContext();