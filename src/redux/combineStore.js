import { combineReducers } from "redux";
import { counterReducer } from "./reducer";
import { ShoesReducer } from "./shoesReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    shoes: ShoesReducer
});