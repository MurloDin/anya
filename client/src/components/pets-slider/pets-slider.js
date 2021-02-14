import React from "react";
import { connect } from 'react-redux';

import './pets-slider.css';

import PetsSliderContainer from "./slider";


const PetsSlider = ({ third_section_title }) => {
    return (
        <section className="pets-slider" id="pets-slider">
            <div className="main-title pets-slider_title">
                {third_section_title}
            </div>
            <PetsSliderContainer />
            <button className="main-btn pets-slider_btn">Посмотреть всех</button>
        </section>
    );
};

const mapStateToProps = ({ third_section_title }) => {
    return { third_section_title };
};

export default connect(mapStateToProps)(PetsSlider);
