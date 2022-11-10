import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Cookies from "universal-cookie";
import { postReview } from "../../../App/Action/Action";
import { useAppDispatch } from "../../../App/Hooks/Hooks";

function CardReview() {
    const cookies = new Cookies();
    const [review, setReview] = useState({
        location: "AbsoluteFit - Sede Bernal",
        email: cookies.get("email"),
        rate: 0,
        comment: "",
    });

    const dispatch = useAppDispatch();
    const handleRating = (rate: number) => {
        setReview({ ...review, rate: rate });
    };

    const handleButtonClick = () => {
        dispatch(postReview(review, ""));
    };

    return (
        <div className="w-full p-10">
            <h2>Califica la Sede Bernal</h2>

            <Rating
                transition
                tooltipArray={[
                    "Malo",
                    "Regular",
                    "Promedio",
                    "Bueno",
                    "Excelente",
                ]}
                onClick={handleRating}
                SVGclassName="inline-block"
            />

            <div className="left-52">
                <img
                    alt="Art"
                    src="https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    className="h-96 w-96 object-cover"
                />
                <button onClick={handleButtonClick}>Calificar</button>
            </div>
        </div>
    );
}
export default CardReview;
