import React from "react";

const third_section_title = (<span>Наши друзья<br />Которые ищут дом</span>)
const error_title = (<span>Упс, злой кот опять, что-то сломал<br /> пожалуйста обновите страницу</span>)
const load_title = (<span>Питомцы уже в пути...</span>)

const initialState = {
    pets: [],
    loading: true,
    error: null,
    third_section_title: third_section_title
};


const reducer = (state=initialState, action) => {

    switch (action.type) {
        case "PETS_LOADED":
            return {
                pets: action.payload,
                loading: false,
                error: null,
                third_section_title: third_section_title
            };
        case "PETS_REQUESTED":
            return {
                pets: [],
                loading: true,
                error: null,
                third_section_title: load_title
            };
        case 'PETS_ERROR':
            return {
                pets: [],
                loading: false,
                error: action.payload,
                third_section_title: error_title
            };
        default:
            return state;
    }
};

export default reducer;
