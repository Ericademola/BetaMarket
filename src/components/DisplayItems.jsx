import { FaRegHeart, FaHeart } from "react-icons/fa";


const DisplayItems = ({ products, loading }) => {
    return (
        <>
            {
                loading ?
                    <h1>loading...</h1>
                    :
                    <div className="grid">
                        {
                            products && products.map((item) => (
                                <div className="item">
                                    <div className="item-image">
                                        <div className="love">
                                            {true ? <FaRegHeart /> : <FaHeart />}
                                        </div>
                                        <img src={`${item.image}`} alt="" />
                                    </div>
                                    <div className="item-detail">
                                        <h3>{item.title.length > 20 ? `${item.title.slice(0, 19)}...` : item.title}</h3>
                                        <p>₦{item.price}</p>
                                        <p>{item.description.length > 90 ? `${item.description.slice(0, 89)}...` : item.description}</p>
                                        <div className="rate-btn">
                                            <i>Rating {item.rating.rate}</i>
                                            <button>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
            }
        </>
    )
}
export default DisplayItems