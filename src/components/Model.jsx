import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa"
import { AppContext } from "../App";
import Rating from "./Rating";

const Model = ({ setIsShowModel }) => {
    const { cartItem, setCartNumber } = useContext(AppContext);
    const [itemNum, setItemNum] = useState(0);
    const handleCloseModel = () => {
        setIsShowModel(false);
    }
    const handleMinus = () => {
        if (itemNum === 0) {
            return
        } else {
            setItemNum((prev) => prev - 1);
            setCartNumber((prev) => prev - 1)
        }
    }
    const handleAdd = () => {
        setItemNum((prev) => prev + 1);
        setCartNumber((prev) => prev + 1)
    }
    return (
        <article className="model-container">
            <div className="model">
                <div className="times-icon" onClick={handleCloseModel}><FaTimes /></div>
                <div className="model-details">
                    <div className="picked-item-image">
                        <img src={`${cartItem.image}`} alt="" />
                    </div>
                    <div className="picked-item-detail">
                        <h3>{cartItem.title}</h3>
                        <p>{cartItem.description}</p>
                        <Rating rating={cartItem.rating.rate} />
                        <h3>₦{cartItem.price}</h3>
                        <div className="button-container">
                            <button onClick={handleMinus}>-</button>
                            <p>{itemNum}</p>
                            <button onClick={handleAdd}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default Model