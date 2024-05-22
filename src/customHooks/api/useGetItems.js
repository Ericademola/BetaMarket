import { useEffect, useState } from "react"

const useGetItems = () => {
    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products') // url
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data from database')
                }
                return res.json();
            }) //get the response
            .then((json) => {
                setData(json);
                setIsPending(false)
            }) // handle response
            .catch(() => {
                alert("could not fetch data from the resource");
                setIsPending(false);
            }) // handle error
    }, [])
    return { data, isPending };
}

export default useGetItems;