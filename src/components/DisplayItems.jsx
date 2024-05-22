import { FaRegHeart, FaHeart } from "react-icons/fa";


const DisplayItems = ({ products, loading }) => {
    return (
        <>
            {
                loading ?
                    <h1>Loading...</h1>
                    :
                    <div className="grid">
                        {
                            products && products.map((item) => (
                                <div className="item" key={item.id}>
                                    <div className="item-image">
                                        <div className="love">
                                            <FaRegHeart /> <FaHeart />
                                        </div>
                                        <img src={`${item.image}`} alt="" />
                                    </div>
                                    <div className="item-detail">
                                        <h3>{item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}</h3>
                                        <p>₦{item.price}</p>
                                        <p>{item.description.length > 90 ? `${item.description.slice(0, 91)}...` : item.description}</p>
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