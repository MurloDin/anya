import React from "react";
import "./arrow.css";

function SampleNextArrow(props) {
    const {onClick } = props;
    return (
        <div className="main-btn slider-arrow slider-arrow_next"
             onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="main-btn slider-arrow slider-arrow_prev"
             onClick={onClick}
        />
    );
}

export {
    SampleNextArrow,
    SamplePrevArrow
}
