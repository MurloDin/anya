import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';

import Slider from "react-slick";
import {SamplePrevArrow, SampleNextArrow} from "./arrow";

import "./slider.css";

import withPetshelterService from "../../hoc";
import fetchPets from "../../../actions";
import ErrorIndicator from "../../error-indicator";
import Spinner from "../../spinner";
import PetCard from "../card";
import ModalWindow from "../../modal_window";
import useWindowDimensions from "../../subsidiary/window-dimensions";

let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const PetsSlider = ({pets, handleOpenModal, handleCloseModal, showModal, pet}) => {

    const { height, width } = useWindowDimensions();

    let quantity = 3;

    if (width < 577){
        quantity = 1;
    }
    else if (width <= 993) {
        quantity = 2;
    }

    settings = {
        ...settings, slidesToShow: quantity
    };

    return (

        <div className="container">
            <Slider {...settings}>
                {
                    pets
                        .filter((item, idx) => idx < 6)
                        .map((item) => {
                           return <PetCard pet={item}
                                           key={item.id}
                                           onShow={() => handleOpenModal(item)}
                                           onClose={handleCloseModal}/>

                    })
                }
            </Slider>
            <ModalWindow modalIsOpen={showModal}
                         onCLose={handleCloseModal}
                         pet={pet}/>
        </div>
    );
};

const PetsSliderContainer = ({ pets, loading, error, fetchPets }) => {

    useEffect(() => {
        fetchPets();
    }, [fetchPets]);

    const [showModal, setShowModal] = useState(false)
    const [pet, setPet] = useState({})

    const handleOpenModal = (pet) => {
        setPet(pet);
        setShowModal(true);
        console.log(pet);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    if(loading) {
        return <Spinner />
    }

    if(error) {
        return <ErrorIndicator />
    }

    return <PetsSlider pets={pets}
                       handleCloseModal={handleCloseModal}
                       handleOpenModal={handleOpenModal}
                       showModal={showModal}
                       pet={pet}/>
};

const mapStateToProps = ({ pets, loading, error }) => {
    return { pets, loading, error };
};

const mapDispatchToProps = (dispatch, {petshelterService}) => {
    return {
        fetchPets: fetchPets(petshelterService, dispatch)
    }
}

export default withPetshelterService()(connect(mapStateToProps, mapDispatchToProps)(PetsSliderContainer));
