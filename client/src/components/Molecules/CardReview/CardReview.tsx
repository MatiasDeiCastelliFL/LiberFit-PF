import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { postReview } from "../../../App/Action/Action";
import { useAppDispatch } from "../../../App/Hooks/Hooks";
import AddButton from "../../Atoms/Inputs/AddButton/AddButton";

function CardReview() {
    const [ratingValue, setRatingValue] = useState(0);
    const [review, setReview] = useState({
      location: "AbsoluteFit - Sede Bernal",
        email: "jeevanrojas@gmail.com",
        rate: ratingValue,
        comment: "",
    });
  
    const dispatch = useAppDispatch();
    const handleRating = (rate: number) => {
      setRatingValue(rate);
      setReview({...review,rate:ratingValue})
    };

    const handleButtonClick = () => {
        dispatch(postReview(review, ""));
  };
  
    return (
        <div className="w-full p-10">
            <h2>Califica esta Sede</h2>

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
