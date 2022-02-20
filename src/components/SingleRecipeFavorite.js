import React, {useContext} from 'react';
import mainContext from "../context/mainContext";

const SingleRecipeFavorite = ({item, index}) => {

    const {getFavorites, setFavorites} = useContext(mainContext)

    function removeRecipe (x, index) {
        const removedFromFavorites = getFavorites.filter((x, i) => i !== index)
        setFavorites([...removedFromFavorites])
    }

    return (

        <div className="recipeCard">

            <img src={item.image[0]} alt=""/>
            <h1>{item.title}</h1>
            <div>Ingredients: {item.ingredients.length}</div>
            <div>Preparation time: {item.prepTime}</div>
            <div>Preparation steps: {item.prepStep}</div>
            <div>Reviews: {item.review.length}</div>
            <div>Rating: {item.averageRating}</div>
            <div>
                <button onClick={() => removeRecipe(item, index)}>Remove from Favorites</button>
            </div>
        </div>




    );
};

export default SingleRecipeFavorite;