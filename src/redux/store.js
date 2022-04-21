import { createStore } from "redux";
import {rootReducer} from "./combineStore"

export const store = createStore(rootReducer);