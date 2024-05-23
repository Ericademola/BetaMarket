import { FaTimes } from "react-icons/fa";
import { UserContext } from "../App";
import { useContext, useState } from "react";

export const Model = ({ setIsShowModel }) => {
    const { cartItem, setCartNum } = useContext(UserContext);

    const [itemNum, setItemNum] = useState(0);

    const handleCloseModel = () => {
        setIsShowModel(false);
    }

    const handleMinus = () => {
        if (itemNum === 0) {
            return
        } else {
            setItemNum((prev) => prev - 1)
            setCartNum((prev) => prev - 1)
        }
    }

    const handlePlus = () => {
        setItemNum((prev) => prev + 1)
        setCartNum((prev) => prev + 1)
    }

    return (
        <>
            {
                cartItem &&
                <section className="model-container">
                    <div className="model">
                        <div className="times-icon" onClick={handleCloseModel}>< FaTimes /></div>
                        <div className="model-details">
                            <div className="picked-item-image">
                                <img src={`${cartItem.image}`} alt="" />
                            </div>
                            <div className="picked-item-detail">

                                <h3>{cartItem.title}</h3>
                                <p>{cartItem.description}</p>
                                <div className="rate-btn">
                                    <i>Rating {cartItem.rating.rate}</i>
                                </div>
                                <h3>₦{cartItem.price}</h3>
                                <div className="button-container">
                                    <button onClick={handleMinus}>-</button>
                                    <p>{itemNum}</p>
                                    <button onClick={handlePlus}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}