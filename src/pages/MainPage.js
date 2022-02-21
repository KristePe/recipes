import {useContext, useEffect, useState} from 'react';
import SingleRecipe from "../components/SingleRecipe"
import mainContext from "../context/mainContext";
import Filter from "../components/Filter";

const MainPage = () => {
    const {getRecipe, getByIngredient, getByIngredNum, getByPrepTime, getByReviewNum, getByRating} = useContext(mainContext)



    const filtered = getRecipe.filter(x => {
        if (getByIngredient === "" && getByIngredNum === "" && getByPrepTime === "" && getByReviewNum === "" && getByRating === "") {
            return x
        }
        if (getByIngredient.length > 0 && getByIngredNum === "" && getByPrepTime === "" && getByReviewNum === "" && getByRating === "") {
            return x.ingredients.includes(getByIngredient)
        }
        if (getByIngredient === "" && getByIngredNum.length > 0 && getByPrepTime === "" && getByReviewNum === "" && getByRating === "") {
            return x.ingredients.length === Number(getByIngredNum)
        }
        if (getByIngredient === "" && getByIngredNum === "" && getByPrepTime.length > 0 && getByReviewNum === "" && getByRating === "") {
            return x.prepTime === getByPrepTime
        }
        if (getByIngredient === "" && getByIngredNum === "" && getByPrepTime === "" && getByReviewNum > 0 && getByRating === "") {
            return x.review.length === Number(getByReviewNum)
        }
        if (getByIngredient === "" && getByIngredNum === "" && getByPrepTime === "" && getByReviewNum === "" && getByRating > 0) {
            return x.averageRating.rating === Number(getByRating)
        }
        if (getByIngredient.length > 0 && getByIngredNum.length > 0 && getByPrepTime === "" && getByReviewNum === "" && getByRating === "") {
            return x.ingredients.includes(getByIngredient) && x.ingredients.length === Number(getByIngredNum)
        }
        if (getByIngredient === "" && getByIngredNum.length > 0 && getByPrepTime.length > 0 && getByReviewNum === "" && getByRating === "") {
            return x.ingredients.length === Number(getByIngredNum) && x.prepTime === getByPrepTime
        }
        if (getByIngredient === "" && getByIngredNum === "" && getByPrepTime.length > 0 && getByReviewNum > 0 && getByRating === "") {
            return x.prepTime === getByPrepTime && x.review.length === Number(getByReviewNum)
        }
        if (getByIngredient === "" && getByIngredNum === "" && getByPrepTime === "" && getByReviewNum > 0 && getByRating > 0) {
            return x.review.length === Number(getByReviewNum) && x.averageRating === Number(getByRating)
        }
        if (getByIngredient.length > 0 && getByIngredNum === "" && getByPrepTime.length > 0 && getByReviewNum === "" && getByRating === "") {
            return x.ingredients.includes(getByIngredient) && x.prepTime === getByPrepTime
        }
        if (getByIngredient.length > 0 && getByIngredNum === "" && getByPrepTime === "" && getByReviewNum > 0 && getByRating === "") {
            return x.ingredients.includes(getByIngredient) && x.review.length === Number(getByReviewNum)
        }
        if (getByIngredient.length > 0 && getByIngredNum === "" && getByPrepTime === "" && getByReviewNum === "" && getByRating > 0) {
            return x.ingredients.includes(getByIngredient) && x.averageRating === Number(getByRating)
        }
        if (getByIngredient === "" && getByIngredNum.length > 0 && getByPrepTime === "" && getByReviewNum > 0 && getByRating === "") {
            return x.ingredients.length === Number(getByIngredient) && x.review.length === Number(getByReviewNum)
        }
        if (getByIngredient === "" && getByIngredNum.length > 0 && getByPrepTime === "" && getByReviewNum === "" && getByRating > 0) {
            return x.ingredients.length === Number(getByIngredient) && x.averageRating === Number(getByRating)
        }
        if (getByIngredient === "" && getByIngredNum === "" && getByPrepTime.length > 0 && getByReviewNum === "" && getByRating > 0) {
            return x.prepTime === getByPrepTime && x.averageRating === Number(getByRating)
        }
        if (getByIngredient.length > 0 && getByIngredNum.length > 0 && getByPrepTime.length > 0 && getByReviewNum === "" && getByRating === "") {
            return x.ingredients.includes(getByIngredient) && x.ingredients.length === Number(getByIngredNum) && x.prepTime === getByPrepTime
        }
        if (getByIngredient === "" && getByIngredNum.length > 0 && getByPrepTime.length > 0 && getByReviewNum > 0 && getByRating === "") {
            return x.ingredients.length === Number(getByIngredient) && x.prepTime === getByPrepTime && x.review.length === Number(getByReviewNum)
        }
        if (getByIngredient === "" && getByIngredNum === "" && getByPrepTime.length > 0 && getByReviewNum > 0 && getByRating > 0) {
            return x.prepTime === getByPrepTime && x.review.length === Number(getByReviewNum) && x.averageRating === Number(getByRating)
        }
        if (getByIngredient.length > 0 && getByIngredient === "" && getByPrepTime === "" && getByReviewNum > 0 && getByRating > 0) {
            return x.ingredients.includes(getByIngredient) && x.review.length === Number(getByReviewNum) && x.averageRating === Number(getByRating)
        }
        if (getByIngredient.length > 0 && getByIngredNum.length > 0 && getByPrepTime === "" && getByReviewNum === "" && getByRating > 0) {
            return x.ingredients.includes(getByIngredient) && x.ingredients.length === Number(getByIngredNum) && x.averageRating === Number(getByRating)
        }
        if (getByIngredient.length > 0 && getByIngredNum.length > 0 && getByPrepTime === "" && getByReviewNum > 0 && getByRating === "") {
            return x.ingredients.includes(getByIngredient) && x.ingredients.length === Number(getByIngredNum) && x.averageRating === Number(getByReviewNum)
        }
        if (getByIngredient.length > 0 && getByIngredNum.length > 0 && getByPrepTime.length > 0 && getByReviewNum > 0 && getByRating > 0) {
            return x.ingredients.includes(getByIngredient) && x.ingredients.length === Number(getByIngredNum) && x.prepTime === getByPrepTime && x.review.length === Number(getByReviewNum) && x.averageRating === Number(getByRating)
        }
        if (getByIngredient.length > 0 && getByIngredNum.length > 0 && getByPrepTime.length > 0 && getByReviewNum > 0 && getByRating === "") {
            return x.ingredients.includes(getByIngredient) && x.ingredients.length === Number(getByIngredNum) && x.prepTime === getByPrepTime && x.review.length === Number(getByReviewNum)
        }
        if (getByIngredient === "" && getByIngredNum.length > 0 && getByPrepTime.length > 0 && getByReviewNum > 0 && getByRating === "") {
            return x.ingredients.length === Number(getByIngredient) && x.prepTime === getByPrepTime && x.review.length === Number(getByReviewNum) && x.averageRating === Number(getByRating)
        }
    })




    return (


        <div className="d-flex wrap">
            <Filter/>
            {filtered.map((x, i) => <SingleRecipe item={x} key={i}/>)}
        </div>
    );
};

export default MainPage;