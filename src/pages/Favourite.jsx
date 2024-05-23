import { useContext, useEffect, useState } from "react";
import DisplayItems from "../components/DisplayItems"
import { UserContext } from "../App";

export const Favourite = () => {

    const [favouriteProducts, setFavouriteProducts] = useState([]);
    const { favIndex } = useContext(UserContext);

    useEffect(() => {
        const existingCartJSON = localStorage.getItem('prod');
        if (existingCartJSON) {
            try {
                const existingCart = JSON.parse(existingCartJSON);
                const favProd = existingCart.filter((prod) => prod.favourite);
                setFavouriteProducts(favProd);
            } catch (error) {
                console.error('Error parsing existingCart:', error);
            }
        } else {
            console.warn('No "prod" data found in localStorage.');
        }
    }, []);

    const upDatedFav = () => {

        // setFavouriteProducts((prevOptions) => [
        //     ...prevOptions.slice(0, favIndex),
        //     ...prevOptions.slice(favIndex + 1)
        // ]);

    }


    useEffect(() => {
        // const upDatedFav = favouriteProducts.splice(favIndex, 1);
        // setFavouriteProducts(upDatedFav)

        // setFavouriteProducts((prevOptions) => [
        //     ...prevOptions.slice(0, favIndex),
        //     ...prevOptions.slice(favIndex + 1)
        // ]);

    }, [favouriteProducts, favIndex])

    // existingCart.splice(index, 1, updatedCartItem);

    return (
        <main>
            <DisplayItems products={favouriteProducts} loading={false}
            // upDatedFav={upDatedFav()} 
            />
        </main>
    )
}