import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import "./PetsPage.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-boundary";
import fetchPets from "../../actions";
import withPetshelterService from "../hoc";
import ModalWindow from "../modal_window";
import PetCard from "../pets-slider/card";


const PetsPage = ({pets, handleOpenModal, handleCloseModal, showModal, pet}) => {
    return (
        <section>
            <div className="container">
                <div className="pets-page__title">Наши питомцы</div>
                <div className="row">
                    {
                        pets.map((item) => {
                            return <PetCard pet={item}
                                            key={item.id}
                                            onShow={() => handleOpenModal(item)}
                                            onClose={handleCloseModal}/>
                        })
                    }
                </div>
            </div>
            <ModalWindow modalIsOpen={showModal}
                         onCLose={handleCloseModal}
                         pet={pet}/>
        </section>
    );
};

const PetsPageContainer = ({pets, loading, error, fetchPets}) => {

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

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <ErrorIndicator/>
    }

    return (
        <PetsPage
            pets={pets}
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
            showModal={showModal}
            pet={pet}
        />
    )
};

const mapStateToProps = ({pets, loading, error}) => {
    return {pets, loading, error};
};

const mapDispatchToProps = (dispatch, {petshelterService}) => {
    return {
        fetchPets: fetchPets(petshelterService, dispatch)
    }
}

export default withPetshelterService()(connect(mapStateToProps, mapDispatchToProps)(PetsPageContainer));