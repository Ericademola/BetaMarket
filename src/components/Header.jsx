import { Link } from "react-router-dom"

const Header = () => {
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

        </header>
    )
}
export default Header