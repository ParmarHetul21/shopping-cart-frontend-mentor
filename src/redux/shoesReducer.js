import {ADD_SHOES } from "./actionType"

const shoesState = {
    shoes : []
}

export const ShoesReducer = (state=shoesState, action) => {
    switch(action.type) {
        case ADD_SHOES:
            return { ...state, shoes: [ ...state.shoes, action.payload ] }           
        default:
            return state
    }
}