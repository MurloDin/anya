const petsLoaded = (newPets) => {
    return {
        type: 'PETS_LOADED',
        payload: newPets
    };
};

const petsRequested = () => {
    return {
        type: 'PETS_REQUESTED'
    };
};

const petsError = (error) => {
    return {
        type: 'PETS_ERROR',
        payload: error
    };
};

const fetchPets = (petshelterService, dispatch) => () => {
    dispatch(petsRequested());
    petshelterService.getPets()
        .then((data) => {
            dispatch(petsLoaded(data));
        })
        .catch((err) => {
            dispatch(petsError(err));
        });
};

export default fetchPets;
