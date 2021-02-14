import React from "react";
import "./card.css";


const PetCard = ({pet: {photoLocation, name}, onShow}) => {
    return (
        <div className="pet-card">
            <div className="img-boundary">
                <img src={`http://localhost:8000${photoLocation}`} alt="pet" className="pet-card__img"/>
            </div>
            <div className="pet-card__title">{name}</div>
            <button
                className="main-btn pet-card__btn"
                onClick={onShow}>
                Узнать больше
            </button>
        </div>
    );
};

export default PetCard;
