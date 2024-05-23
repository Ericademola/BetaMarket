import { useContext, useEffect, useState } from "react";
import DisplayItems from "../components/DisplayItems"
import useGetItems from "../customHooks/api/useGetItems"
import { UserContext } from "../App";
import { FaTimes } from "react-icons/fa";

const Home = () => {
    const { cartItem } = useContext(UserContext)

    const { data: products, isPending: loading } = useGetItems();
    const [upDatedProducts, setUpDatedProducts] = useState();

    useEffect(() => {
        if (products) {
            const mappedProducts = products.map((product) => ({
                ...product,
                like: false
            }))
            setUpDatedProducts(mappedProducts)
        }
    }, [products])

    return (
        <>
            <main>
                {
                    cartItem &&
                    <section className="model-container">
                        <div className="model">
                            <div className="times-icon">< FaTimes /></div>
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
                                        <button>-</button>
                                        <p>0</p>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                <DisplayItems products={upDatedProducts} loading={loading} />
            </main>
        </>
    )
}
export default Home