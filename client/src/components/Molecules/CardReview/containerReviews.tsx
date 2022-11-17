import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Cookies from "universal-cookie";
import { getReviews, postReview } from "../../../App/Action/Action";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks/Hooks";
import toast, { Toaster } from "react-hot-toast";
import { set } from "immer/dist/internal";
import CardReview from "./CardReview";

function ContainerReviews() {
    const cookies = new Cookies();
    const [review, setReview] = useState({
        location: "AbsoluteFit - Sede Bernal",
        email: cookies.get("email"),
        rate: 0,
        comment: "",
    });
    const {locations} = useAppSelector((state) => state.data);
    const {reviews} = useAppSelector((state) => state.data);
    console.log(reviews);
    const dispatch = useAppDispatch();
    const [confirm , setConfirm] = useState(false);


    const handleRating = (rate: number) => {
        setReview({ 
            ...review, 
            rate: rate,
        });
        setConfirm(true);
    };
    const handleButtonClick = async (e:any) => {
        e.preventDefault();
        console.log(e.target.value);
        setReview({
            ...review,
            location: e.target.value,
        });
        await dispatch(postReview({review:review, token: cookies.get("token")}, ""));
        setConfirm(false);
        toast.success(`Calificacion recibida`, {
            duration: 6000,
            position: 'bottom-center',
        });

    };

    const [dataReviews, setDataReviews] =useState([0,0,0,0,0])
    let [totalReviews, setTotalReviews] = useState(0);
    let [average, setAverage] = useState(0);

    useEffect(() => {
        let newReviews = [0,0,0,0,0];
        reviews.map((review:any) => {
            newReviews[review.rate - 1] += 1;
        })
        setDataReviews(newReviews)

        setTotalReviews(dataReviews.reduce((a,b) => a + b, 0));
        setTimeout(() => {
            setAverage(dataReviews.reduce((a,b) => a + b*(dataReviews.indexOf(b)+1), 0) / totalReviews);
        }, 1000);
        
    }, [reviews])

    
    

    return (
        <div className="grid grid-cols-2 flex-col gap-10m overflow-x-scroll w-custom_5 gap-5">
            {
    
            locations.map((location:any) => (
                <CardReview name={location.name} id={location.id}/>
            ))}
            <Toaster/>
        </div>
    );
}
export default ContainerReviews;