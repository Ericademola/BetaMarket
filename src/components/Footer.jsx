const Footer = () => {
    return (
        <footer>
            <em>your best price</em>
            <p>BetaMarket &copy; 2024</p>
        </footer>
    )
}
export default Footer


// const { useState, useEffect } = require("react")

// const useCache = () => {

// const [cartItem, setCartItem] = useState();

// useEffect(() => {
//     if (cartItem) {
//         if (!localStorage.getItem('cart')) {
//             const itemArray = [];
//             itemArray.push(cartItem)
//             localStorage.setItem('cart', JSON.stringify(itemArray));
//         } else {
//             const existingCart = JSON.parse(localStorage.getItem('cart'));
//             existingCart.push(cartItem);
//             localStorage.setItem('cart', JSON.stringify(existingCart));
//         }
//     }
// }, [cartItem])

// return {
//     setCartItem
// }
// }

// export default useCache;