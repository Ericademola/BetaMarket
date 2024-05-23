import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../App";

const Header = () => {
    const { cartItem } = useContext(UserContext);

    // useEffect(() => {
    //     const existingCart = JSON.parse(localStorage.getItem('cart'));
    //     // setCartProducts(existingCart)
    // }, [cartItem])
    return (
        <header>
            <h1>BetaMarket</h1>
            <nav>
                <Link to='/'>
                    <div className="logo">
                        BM
                    </div>
                </Link>
                <Link to='/favourite'>
                    Favourite
                </Link>
                <Link to='/cart'>
                    Cart
                </Link>
            </nav>
            <p>{cartItem}</p>

        </header>
    )
}
export default Header