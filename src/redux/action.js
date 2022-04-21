import { INCREMENT, DECREMENT, ADD_SHOES } from "./actionType";

export const increment_quantity = () => ({ type: INCREMENT });
export const decrement_quantity = () => ({ type: DECREMENT });
export const add_shoes = (id, title, price) => ({ 
    type: ADD_SHOES,
    payload: { id, title, price }
});