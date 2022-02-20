import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import mainContext from "../context/mainContext";



const SingleRecipe = ({item}) => {

    const {getFavorites, setFavorites} = useContext(mainContext)
    const nav = useNavigate()

    function viewSingleRecipe () {
        nav(`/recipe/${item.title}`)
    }

    function addToFav (item) {
        if (!getFavorites.includes(item)){
            getFavorites.push(item)
            setFavorites ([...getFavorites])
        }
        nav("/")

    }

    return (
        <div className="recipeCard">
            <img onClick={viewSingleRecipe} src={item.image[0]} alt=""/>
            <h3>{item.title}</h3>
            <p>Ingredients: <b>{item.ingredients.length}</b></p>
            <p>Preparation time: <b>{item.prepTime}</b></p>
            <p>Preparation steps: <b>{item.prepStep.length}</b></p>
            <button onClick={()=>addToFav(item)}>Add to Favorites</button>
        </div>

    );
};

export default SingleRecipe;