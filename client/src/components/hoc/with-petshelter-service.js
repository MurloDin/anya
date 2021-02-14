import React from 'react';
import { PetshelterServiceConsumer } from "../petshelter-service-context";

const withPetshelterService = () => (Wrapped) => {

    return (props) => {
        return (
            <PetshelterServiceConsumer>
                {
                    (petShelterService) => {
                        return (<Wrapped {...props}
                                         petshelterService={petShelterService}/>);
                    }
                }
            </PetshelterServiceConsumer>
        );
    };
};

export default withPetshelterService;
