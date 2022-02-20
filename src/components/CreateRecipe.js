import React, {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";
import {current} from "@reduxjs/toolkit";
import ImageCard from "./ImageCard";
import IngredientCard from "./IngredientCard";
import PrepStepCard from "./PrepStepCard";


const CreateRecipe = () => {
    const
        {getRecipes, setRecipes,
            getFavorites, setFavorites,
            getImage, setImage,
            getIngredient, setIngredient,
            getStep, setStep,
            getError, setError}
            = useContext(mainContext)

    const nav = useNavigate()


    const image = useRef()
    const title = useRef()
    const ingredients = useRef()
    const prepTime = useRef()
    const prepStep = useRef()

    function addImage() {
        const newImage = image.current.value
        setImage([...getImage, newImage])
    }

    function addIngredient() {
        const newIngredient = ingredients.current.value
        setIngredient([...getIngredient, newIngredient])
    }

    function addStep() {
        const newStep = prepStep.current.value
        setStep([...getStep, newStep])
    }






    function addRecipe () {

        if(getImage.length < 2) return setError("2 pictures minimum")
        if(getIngredient.length < 2) return setError("2 ingredients minimum")
        if(title.current.value.length === 0) return setError ("Title field is empty")
        if(getStep.length === 0) return setError("Preparation step field is empty")
        if(prepTime.current.value.length === 0 ) return setError ("Preparation time field is empty")
        setError (null)


        const recipe = {
            // url: title.current.value.replace(/ /g, "-"),
            image: getImage,
            title: title.current.value,
            ingredients: getIngredient,
            prepTime: prepTime.current.value,
            prepStep: getStep,
            review: [],
            rating: [],
            averageRating: 0
        }

        setRecipes([...getRecipes, recipe])
        nav ('/')
        setImage([])
        setIngredient([])
        setStep([])
    }




    return (
        <div className="createRecipeCard">

            <div>
                <ImageCard getImage={getImage} setImage={setImage}/>
            </div>
            <div className="d-flex j-start">
                <input type="text" ref={image} placeholder="image"/>
                <button onClick={addImage}>Add Image</button>
            </div>


            <input type="text" ref={title} placeholder="title"/>


            <div>
                <IngredientCard getIngredient={getIngredient} setIngredient={setIngredient}/>
            </div>
            <div className="d-flex j-start">
                <input type="text" ref={ingredients} placeholder="ingredient"/>
                <button onClick={addIngredient}>Add Ingredient</button>
            </div>




            <input type="text" ref={prepTime} placeholder="preparation time"/>



            <div>
                <PrepStepCard getStep={getStep} setStep={setStep}/>
            </div>
            <div className="d-flex j-start">
                <input type="text" ref={prepStep} placeholder="preparation steps"/>
                <button onClick={addStep}>Add Step</button>
            </div>



            <p>{getError}</p>


            <div className="d-flex j-center">

                <button onClick={addRecipe}>Create recipe</button>
            </div>

        </div>
    );
};

export default CreateRecipe;