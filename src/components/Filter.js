import React, {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";


const Filter = () => {

    const {setByIngredient, setByIngredNum, setByPrepTime, setByReviewNum, setByRating} = useContext(mainContext)

    function filter() {
        setByIngredient(ingredient.current.value)
        setByIngredNum(amountOfIngredient.current.value)
        setByPrepTime(prepTime.current.value)
        setByReviewNum(reviewCount.current.value)
        setByRating(averageRating.current.value)
    }

    const ingredient = useRef()
    const amountOfIngredient = useRef()
    const prepTime = useRef()
    const reviewCount = useRef()
    const averageRating = useRef()

    return (
        <div>
            <div className="filterCard">
                <input className="filterInput" ref={ingredient} type="text" placeholder="By ingredient..."/>
                <input className="filterInput" ref={amountOfIngredient} type="text" placeholder="By amount of ingredients..."/>
                <input className="filterInput" ref={prepTime} type="text" placeholder="By preparation time..."/>
                <input className="filterInput" ref={reviewCount} type="text" placeholder="By reviews count..."/>
                <input className="filterInput" ref={averageRating} type="text" placeholder="By average rating..."/>
                <button onClick={filter} className="btn-add">Filter</button>
            </div>
        </div>
    );
};

export default Filter;