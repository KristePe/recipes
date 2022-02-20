import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import SingleRecipeView from "../components/SingleRecipeView";



const SingleRecipePage = () => {



    return (
        <div className="d-flex j-center">
            <SingleRecipeView />
        </div>
    );
};

export default SingleRecipePage;