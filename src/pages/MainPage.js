import {useContext, useEffect, useState} from 'react';
import SingleRecipe from "../components/SingleRecipe"
import CreateRecipe from "../components/CreateRecipe";
import mainContext from "../context/mainContext";

const MainPage = () => {
    const {getRecipes} = useContext(mainContext)

    return (
        <div className="d-flex wrap">
            {getRecipes.map((x, i) => <SingleRecipe item={x} key={i}/>)}
        </div>
    );
};

export default MainPage;