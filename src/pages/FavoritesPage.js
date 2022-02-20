import React from 'react';
import {useContext} from "react";
import mainContext from "../context/mainContext";
import SingleRecipeFavorite from "../components/SingleRecipeFavorite";




const FavoritesPage = () => {
    const {getFavorites} = useContext(mainContext)

    return (
        <div className="d-flex wrap">
            <div className="d-flex wrap">
            {getFavorites.map((x, i) => <SingleRecipeFavorite index={i} item={x} key={i} className="recipeCard"/>)},
            </div>
        </div>
    );
};

export default FavoritesPage;