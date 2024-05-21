import { useEffect, useState } from "react"

const useGetItems = () => {
    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fatch the data for the resource');
                }
                return res.json()
            }).then((json) => {
                setData(json);
                setIsPending(false);
            })
            .catch(() => {
                alert("could not fatch the data for the resource");
                setIsPending(false);
            })
    }, [])
    return { data, isPending };
}

export default useGetItems