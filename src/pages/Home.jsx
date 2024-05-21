import DisplayItems from "../components/DisplayItems"
import useGetItems from "../customHooks/api/useGetItems"
const Home = () => {
    const { data: products, isPending: loading } = useGetItems();
    return (
        <>
            <main>
                <DisplayItems products={products} loading={loading} />
            </main>
        </>
    )
}
export default Home