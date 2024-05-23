import { useContext, useEffect, useState } from "react";
import DisplayItems from "../components/DisplayItems"
import useGetItems from "../customHooks/api/useGetItems"
import { UserContext } from "../App";
// import useStoreData from "../customHooks/cache/usestoreData";


const Home = () => {
    const { data: products, isPending: loading } = useGetItems();
    const [upDatedProducts, setUpDatedProducts] = useState();
    const [cacheProducts, setCacheProducts] = useState()
    // useStoreData(products, "prod", upDatedProducts)
    const { setCartItem } = useContext(UserContext);


    // const cacheProduct = useStoreData();
    // setKey("prod");
    // setCartItem(upDatedProducts);

    useEffect(() => {
        if (products && !localStorage.getItem("prodh")) {
            const mappedProducts = products.map((product) => ({
                ...product,
                favourite: false
            }));
            localStorage.setItem("prodd", JSON.stringify(mappedProducts));
            setUpDatedProducts(mappedProducts)
        } else if (localStorage.getItem("prodh")) {
            const existingProducts = JSON.parse(localStorage.getItem('prodd'));
            setUpDatedProducts(existingProducts)
        }
    }, [products]);

    // useEffect(() => {
    //     if (products && !localStorage.getItem("prodh")) {
    //         const mappedProducts = products.map((product) => ({
    //             ...product,
    //             favourite: false
    //         }));
    //         setUpDatedProducts(mappedProducts)
    //     }
    // }, [products]);


    /*useEffect(() => {

        // const itemff = (cartItem, key, itemArray) => {
        if (upDatedProducts && !localStorage.getItem("prodd")) {
            // if (!localStorage.getItem("prod")) {
            // const itemArray = [];
            // itemArray.push(cartItem)
            localStorage.setItem("prodd", JSON.stringify(upDatedProducts));
            // console.log('ggog');
            // } else {
            //     return
            // const existingCart = JSON.parse(localStorage.getItem('cart'));
            // existingCart.push(cartItem);
            // localStorage.setItem(key, JSON.stringify(existingCart));
            // }
        }
        // }
        // itemff()
    }, [upDatedProducts]) */

    useEffect(() => {
        setCacheProducts(localStorage.getItem("prodd"))
    }, []);

    return (
        <>
            <main>
                <DisplayItems products={upDatedProducts} loading={loading} />
            </main>
        </>
    )
}
export default Home