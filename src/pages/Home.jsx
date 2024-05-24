import { useEffect, useState } from "react";
import DisplayItems from "../components/DisplayItems"
import useGetItems from "../customHooks/api/useGetItems"
import Model from "../components/Model";

const Home = () => {


    const { data: products, isPending: loading } = useGetItems();
    const [upDatedProducts, setUpDatedProducts] = useState();
    const [isShowModel, setIsShowModel] = useState(false);
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
                <DisplayItems products={upDatedProducts} loading={loading} setIsShowModel={setIsShowModel} />
            </main>

            {
                isShowModel &&
                <Model setIsShowModel={setIsShowModel} />
            }

        </>
    )
}
export default Home