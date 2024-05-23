import { Link } from "react-router-dom"
import { IoIosCart } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../App";
const Header = () => {
    const { cartNum } = useContext(UserContext)
    return (
        <header>

            <nav>
                <div className="company">
                    <Link to='/'>
                        <div className="logo">
                            BM
                        </div>
                    </Link>
                    <h1>BetaMarket</h1>
                </div>
                <div>
                    <span className="cart-icon"><IoIosCart /></span>
                    <sup>{cartNum}</sup>
                </div>

            </nav>

        </header>
    )
}
export default Header