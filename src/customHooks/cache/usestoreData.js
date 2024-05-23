import { useEffect, useState } from "react"

const useStoreData = () => {
    // const [cartItem, setCartItem] = useState();
    // const [key, setKey] = useState();

    useEffect(() => {

        const itemff = (cartItem, key, itemArray) => {
            if (cartItem) {
                if (!localStorage.getItem(key)) {
                    // const itemArray = [];
                    itemArray.push(cartItem)
                    localStorage.setItem(key, JSON.stringify(itemArray));
                    console.log('ggog');
                } else {
                    const existingCart = JSON.parse(localStorage.getItem('cart'));
                    existingCart.push(cartItem);
                    localStorage.setItem(key, JSON.stringify(existingCart));
                }
            }
        }
        itemff()
    }, [])

    // return {
    //     setCartItem, setKey
    // }
    // const [items, setItems] = useState();
    // const [key, setKey] = useState();
    // useEffect(() => {
    //     if (items) {
    //         localStorage.setItem(key, JSON.stringify(items))

    //         // if (!localStorage.getItem(key)) {
    //         //     localStorage.setItem(key, JSON.stringify(items))
    //         // } else {
    //         //     localStorage.setItem(key, JSON.stringify(items))
    //         // }
    //     }
    // }, [items, key])
    // return {
    //     setItems,
    //     setKey
    // }
}
export default useStoreData;