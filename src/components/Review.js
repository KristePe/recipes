import React, {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";
import {Rating} from "@material-ui/lab";


const Review = ({x}) => {
    const {getRecipe,setRecipe, value, setValue} = useContext(mainContext)

    const reviewText = useRef()

    function addReview(x) {
        if (value > 0 && reviewText.current.value.length > 0) {
            x.rating.push(value)
            const finalRating = x.rating.reduce((previousValue, currentValue) => previousValue + currentValue);
            x.review.push({reviewRating: value, reviewText: reviewText.current.value})
            setRecipe([...getRecipe])
            x.averageRating = Math.round(finalRating / x.rating.length)
        }
        setValue(null)
        return reviewText.current.value = ""
    }

    return (
        <div>
            <div>
                <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue)}}/>
            </div>
            <input ref={reviewText} className="textReview" placeholder="Review..."/>
            <button onClick={() => addReview(x)} className="btn-add">Add</button>
            
        </div>
    );
};

export default Review;