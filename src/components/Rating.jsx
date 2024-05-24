import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
    const starRating = Math.round(rating);
    const ratingsArr = Array(starRating).fill(<FaStar />)
    return (
        <div>
            <i>Rating: </i>
            {
                ratingsArr.map((star, index) =>
                    <span key={index} className="rating-star">
                        {star}
                    </span>
                )}
        </div>

    )
}
export default Rating