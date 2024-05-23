import { Link } from "react-router-dom"
import { IoIosCart } from "react-icons/io";
const Header = () => {
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
                    <sup>0</sup>
                </div>

            </nav>

        </header>
    )
}
export default Header