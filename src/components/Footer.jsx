import { useEffect, useState } from "react";

const Footer = () => {
    const [year, setYear] = useState();
    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])
    return (
        <footer>
            <em>your best price</em>
            <p>BetaMarket &copy; {year}</p>
        </footer>
    )
}
export default Footer