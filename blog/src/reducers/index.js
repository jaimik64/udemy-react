import { combineReducers } from "redux";
import postReducers from "./postReducers";
import userReducers from "./userReducers";

export default combineReducers({
    // dsahbs: () => 'hi there' // NOTE: Trick to remove reducer error
    posts: postReducers,
    users: userReducers
});