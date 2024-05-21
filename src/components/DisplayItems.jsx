import { FaRegHeart, FaHeart } from "react-icons/fa";


const DisplayItems = () => {
    return (
        <div className="grid">
            <div className="item">
                <div className="item-image">
                    <div className="love">
                        <FaRegHeart />
                    </div>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                </div>
                <div className="item-detail">
                    <h3>bag</h3>
                    <p>amount</p>
                    <p>description</p>
                    <div className="rate-btn">
                        <i>rating</i>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DisplayItems