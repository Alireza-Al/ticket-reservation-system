import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ticketReducer from "./ticketReducer";

const rootReducer = combineReducers({
    user: userReducer,
    ticket: ticketReducer,
});

export default rootReducer;
