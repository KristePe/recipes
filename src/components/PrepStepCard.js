import React from 'react';



const PrepStepCard = ({getStep, setStep}) => {

    function removedStep (x, index) {
        const removedStep = getStep.filter((x, i) => i !==index)
        setStep([...removedStep])
    }

    return (
        <div>
            <div className="d-flex">
                {getStep.map((x, i) =>
                    <div key={i}>
                        <div>{x}</div>
                        <button onClick={() => removedStep(x, i)}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrepStepCard;