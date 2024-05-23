import { useContext, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { UserContext } from "../App";


const FavouriteIcon = ({ item, index, upDatedFav }) => {

    const [favourite, setFavourite] = useState(item.favourite);

    const handleFavourite = () => {
        // Toggle the favorite status
        const updatedFavourite = !favourite;
        setFavourite(updatedFavourite);

        // Update the item with the new favorite status
        const updatedCartItem = { ...item, favourite: updatedFavourite };

        // Retrieve existing cart from localStorage
        const existingCartJSON = localStorage.getItem('prodd');
        const existingCart = existingCartJSON ? JSON.parse(existingCartJSON) : [];

        if (index !== -1) {
            // Replace the item at the specified index
            existingCart.splice(index, 1, updatedCartItem);

            // Update localStorage with the modified cart
            localStorage.setItem('prodd', JSON.stringify(existingCart));
        } else {
            console.error('Item not found in cart.');
        }
        // setFavIndex(index);
        // upDatedFav()
    };

    return (
        <div className="love" onClick={handleFavourite}>
            {favourite ? <FaHeart /> : <FaRegHeart />}
        </div>
    )
}

const DisplayItems = ({ products, loading, }) => {
    const { setCartItem } = useContext(UserContext);

    const [addItem, setAddItem] = useState();
    const handleAdd = (item) => {
        setCartItem((prev) => prev + 1)
        // if (cartItem) {
        if (!localStorage.getItem('cart')) {
            const itemArray = [];
            itemArray.push(item)
            localStorage.setItem('cart', JSON.stringify(itemArray));
        } else {
            const existingCart = JSON.parse(localStorage.getItem('cart'));
            existingCart.push(item);
            localStorage.setItem('cart', JSON.stringify(existingCart));
        }
        // }
    }

    const handleRemove = (index) => {
        const existingCartJSON = localStorage.getItem('cart');
        const existingCart = existingCartJSON ? JSON.parse(existingCartJSON) : [];
        existingCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(existingCart));
    }
    return (
        <>
            {
                loading ?
                    <h1>Loading...</h1>
                    :
                    <div className="grid">
                        {
                            products && products.map((item, index) => (
                                <div className="item" key={item.id}>
                                    <div className="item-image">
                                        <FavouriteIcon item={item} index={index}
                                        // upDatedFav={upDatedFav()} 
                                        />
                                        <img src={`${item.image}`} alt="" />
                                    </div>
                                    <div className="item-detail">
                                        <h3>{item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}</h3>
                                        <p>₦{item.price}</p>
                                        <p>{item.description.length > 90 ? `${item.description.slice(0, 91)}...` : item.description}</p>
                                        <div className="rate-btn">
                                            <i>Rating {item.rating.rate}</i>
                                            <button onClick={() => handleAdd(item)}>Add to cart</button>
                                            <button onClick={() => handleRemove(index)}>Add to cart</button>
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