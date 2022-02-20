import React, {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate, useParams} from "react-router-dom";
import Review from "./Review";
import {Rating} from "@material-ui/lab";

const SingleRecipeView = () => {
    const {getRecipes} = useContext(mainContext)
    const {titleRecipe} =useParams()
    const {getFavorites, setFavorites, value, setValue } = useContext(mainContext)
    const nav = useNavigate()

    const viewRecipe = getRecipes.find(x => x.title === titleRecipe)


    function addToFav (x) {
        if (!getFavorites.includes(x)) {
            getFavorites.push(x)
            setFavorites([...getFavorites])
        }
        nav(`/recipe/${x.title}`)
    }


    const commentRef = useRef()




    return (

        <div >
            <div className="recipeCard">
                <img src={viewRecipe.image[0]} alt=""/>

                <div > <h2>{viewRecipe.title}</h2> </div>

                <div>
                    <b>Ingredients:  </b>
                        {viewRecipe.ingredients.map((x, i) =>
                        <div key={i}>{x}</div>
                    )}
                </div>

                <div>
                    <b>Preparation time:  </b>
                         {viewRecipe.prepTime}
                </div>


                <div>
                    <b>Preparation steps:  </b>
                        {viewRecipe.prepStep.map((x, i) =>
                        <div key={i}>{x}</div>
                    )}
                </div>
                <button onClick={()=>addToFav(viewRecipe)}>Add to Favorites</button>




                <div className="flex column j-center a-items-center a-cont-center">

                    {viewRecipe.review.map((x, i) => {
                        return(
                            <div className="reviewToRead" key={i}>
                                <div>
                                    <Review x={x} index={i}/>
                                    <Rating name="read-only" value={viewRecipe.rating} readOnly/>
                                </div>
                                <div>{x.reviewText}</div>
                            </div>)}
                    )
                    }




                </div>
            </div>



        </div>
    );
};

export default SingleRecipeView;