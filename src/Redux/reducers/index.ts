
import { combineReducers } from "redux";
import MovieReducer from "./moviesReducer";

const RootReducer = combineReducers({
  movie:MovieReducer,
});
export default RootReducer