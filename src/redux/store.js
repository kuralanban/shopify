import { createStore } from "redux";
import groceryReducer from "./reducer";

const store=createStore(groceryReducer);

export default store;