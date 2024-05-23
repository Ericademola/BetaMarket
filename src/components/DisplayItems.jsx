import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";


const LikeComp = ({ item }) => {
    const [isItemLiked, setIsItemLike] = useState(item.like);

    const handleLike = () => {
        setIsItemLike((prev) => !prev)
    }

    return (
        <div className="love" onClick={handleLike}>
            {isItemLiked ? <FaHeart /> : <FaRegHeart />}
        </div>
    )
}

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
                                        <LikeComp item={item} />
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