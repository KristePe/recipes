import React from 'react';



const ImageCard = ({getImage, setImage}) => {

    function removeImage (x, index) {
        const removedImage = getImage.filter((x, i) => i !==index)
        setImage([...removedImage])
    }


    return (
        <div className="d-flex column">
            {getImage.map((x, i) =>
            <div key={i}>
                <img src={x} alt=""/>
                <button onClick={() => removeImage(x, i)}>Remove</button>
            </div>
            )}
        </div>
    );
};

export default ImageCard;