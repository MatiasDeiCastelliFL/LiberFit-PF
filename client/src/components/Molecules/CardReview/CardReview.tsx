import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Cookies from "universal-cookie";
import { postReview } from "../../../App/Action/Action";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import toast, { Toaster } from "react-hot-toast";
import { set } from "immer/dist/internal";

function CardReview() {
    const cookies = new Cookies();
    const [review, setReview] = useState({
        location: "AbsoluteFit - Sede Bernal",
        email: cookies.get("email"),
        rate: 0,
        comment: "",
    });
    const {locations} = useAppSelector((state) => state.data);
    const dispatch = useAppDispatch();


    const handleRating = (rate: number) => {
        setReview({ 
            ...review, 
            rate: rate,
        });
    };
    const handleButtonClick = async (e:any) => {
        e.preventDefault();
        console.log(e.target.value);
        setReview({
            ...review,
            location: e.target.value,
        });
        await dispatch(postReview({review:review, token: cookies.get("token")}, ""));
        toast.success(`Calificacion recibida`, {
            duration: 6000,
            position: 'bottom-center',
        });
    };

    const dataReviews = [3,5,7,9,11]
    const totalReviews = dataReviews.reduce((a,b) => a + b, 0);
    const average = dataReviews.reduce((a,b) => a + b*(dataReviews.indexOf(b)+1), 0) / totalReviews;
    

    return (
        <div className="w-custom_7 p-10 flex flex-col gap-10">
            {
    
            locations.map((location:any) => (
                <div className="flex bg-semiBlack text-white rounded-xl justify-between p-6">
                        <div className="flex flex-col gap-3 justify-start items-center">
                            <h2>Califica la Sede {location.name}</h2>

                            <button value={location.name} onClick={handleButtonClick}>
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
                            </button>
                            <div className="flex flex-col gap-3 w-full">
                                {
                                    dataReviews.map((review:any, index) => (
                                        <div className="flex items-center justify-start gap-1 w-full">
                                            <p>{index+1}</p>
                                            <div className="w-custom_7 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className={`bg-blue-600 h-2.5 rounded-full`} style={
                                                    {
                                                        width: `${(review * 100) / totalReviews}%`
                                                    }
                                                }> 
                                                </div>
                                            </div>
                                            <p>{`${Math.round((review * 100) / totalReviews)}%`}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="left-52">
                            <img
                                alt="Art"
                                src="https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                className=" h-48 w-48 object-cover rounded-2xl"
                            />
                            <p>{`${totalReviews} Calificaciones`}</p>
                            <p>{`${average.toFixed(1)}`}</p>
                        </div>
                </div>
            ))}
            <Toaster/>
        </div>
    );
}
export default CardReview;
