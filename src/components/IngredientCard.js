import React from 'react';



const IngredientCard = ({getIngredient, setIngredient}) => {

    function removedIngredient (x, index) {
        const removedIngredient = getIngredient.filter((x, i) => i !==index)
        setIngredient([...removedIngredient])
    }

    return (
        <div>
            <div className="d-flex column">
                {getIngredient.map((x, i) =>
                    <div key={i}>
                       <div>{x}</div>
                        <button onClick={() => removedIngredient(x, i)}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IngredientCard;