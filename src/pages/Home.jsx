import { useEffect, useState } from "react";
import DisplayItems from "../components/DisplayItems"
import useGetItems from "../customHooks/api/useGetItems"


const Home = () => {
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
                <DisplayItems products={upDatedProducts} loading={loading} />
            </main>
        </>
    )
}
export default Home