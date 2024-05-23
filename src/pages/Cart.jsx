import { useEffect, useState } from "react"
import DisplayItems from "../components/DisplayItems"

const Cart = () => {
    const [cartProducts, setCartProducts] = useState();
    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem('cart'));
        setCartProducts(existingCart)
    }, [])
    return (
        <main>
            <DisplayItems products={cartProducts} />
        </main>
    )
}
export default Cart