import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import user from "./modules/user";
import ranking from "./modules/ranking";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({user, ranking});
const store = createStore(rootReducer, enhancer);

export default store;